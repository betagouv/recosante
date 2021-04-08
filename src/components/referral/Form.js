import React, { useState } from 'react'
import styled from 'styled-components'

import api from 'src/utils/api'
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
  const [code, setCode] = useState(null)

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        setError(false)
        if (!user || !patients) {
          setError(true)
        } else {
          const patientsArray = patients.replaceAll(', ', ',').split(',')
          api
            .fetch(`https://ecosante.beta.gouv.fr/inscription-patients`, {
              nom_medecin: user,
              mails: patientsArray,
            })
            .then(setCode)
            .catch(setCode)
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
      {code && (
        <Alert error={code !== 'ok'}>
          {code === 'ok'
            ? `Les invitations ont été envoyées`
            : `Une erreur est survenue. Une ou plusieurs invitations n'ont pas pu être envoyé.`}
        </Alert>
      )}
    </Wrapper>
  )
}
