import React, { useState } from 'react'
import styled from 'styled-components'

import TextInputWithLabel from 'src/components/base/TextInputWithLabel'
import TextArea from 'src/components/base/TextArea'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`
const Submit = styled(Button)`
  align-self: flex-end;
`
export default function InscriptionPatients(props) {
  const [user, setUser] = useState('')
  const [patients, setPatients] = useState('')

  const [error, setError] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [success, setSuccess] = useState(false)
  const [code, setCode] = useState(null)

  const createHeaders = () => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('api-key', process.env.GATSBY_SENDINBLUE_API_KEY)
    return headers
  }
  const createContact = ({ patient, user }) =>
    fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      body: JSON.stringify({
        email: patient,
        attributes: {
          MEDECIN: user,
        },
        listIds: [629],
      }),
      headers: createHeaders(),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id) {
          return 'success'
        }
        if (res.code === 'duplicate_parameter') {
          return updateContact({ patient, user })
        }
        return res.code
      })

  const updateContact = ({ patient, user }) =>
    fetch(`https://api.sendinblue.com/v3/contacts/${patient}`, {
      method: 'PUT',
      body: JSON.stringify({
        attributes: {
          MEDECIN: user,
        },
        listIds: [629],
      }),
      headers: createHeaders(),
    }).then((res) => 'success')

  const sendEmail = ({ patient }) =>
    fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      body: JSON.stringify({
        to: [
          {
            email: patient,
          },
        ],
        templateId: 487,
      }),
      headers: createHeaders(),
    })

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        setSuccess(false)
        setError(false)
        if (!user || !patients) {
          setError(true)
        } else {
          const patientsArray = patients.replaceAll(', ', ',').split(',')
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

          const tempInvalidEmail = patientsArray.find(
            (patient) => !re.test(String(patient).toLowerCase())
          )
          setInvalidEmail(tempInvalidEmail)

          if (!tempInvalidEmail) {
            setCode(success)
            patientsArray.map((patient) =>
              createContact({ patient, user }).then((res) => {
                if (res === 'success') {
                  sendEmail({ patient }).then((res) =>
                    setCode(res.ok ? 'success' : 'error')
                  )
                } else {
                  setCode('error')
                }
              })
            )
          }
        }
      }}
    >
      <TextInputWithLabel
        label='Votre nom et fonction'
        name='name'
        value={user.name}
        error={error && !user.name}
        onChange={({ value }) => setUser(value)}
      />
      <TextArea
        label='Les emails des patient·e·s que vous souhaitez inscrire'
        subtitle='Entrez un ou plusieurs email(s) séparés par des virgules (,).'
        name='patients'
        value={user.patients}
        error={error && !user.patients}
        onChange={({ value }) => setPatients(value)}
      />
      <Submit>Envoyer</Submit>
      {error && <Alert error>Merci de remplir tous les champs</Alert>}
      {invalidEmail && (
        <Alert error>
          Le format de l'email {invalidEmail} n'est pas valide
        </Alert>
      )}
      {success && <Alert>Merci ! Nous avons bien reçu votre message</Alert>}
      {code && (
        <Alert error={code !== 'success'}>
          {code === 'success'
            ? `Les invitations ont été envoyées`
            : `Une erreur est survenue. Une ou plusieurs invitations n'ont pas pu être envoyé.`}
        </Alert>
      )}
    </Wrapper>
  )
}
