import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'

import api from 'src/utils/api'
import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import TextArea from 'src/components/base/TextArea'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'

const Text = styled.p`
  font-size: 1.25rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
const Form = styled.form``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default function Index(props) {
  const [avis, setAvis] = useState(null)
  const [short_id, setShort_id] = useState(null)
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(null)
  useEffect(() => {
    setAvis(queryString.parse(window.location.search).avis)
    setShort_id(queryString.parse(window.location.search).short_id)
  }, [])

  useEffect(() => {
    if (avis && short_id) {
      api.post(`/newsletter/${short_id}/avis?appliquee=${avis}`, null, true)
    }
  }, [avis, short_id])

  return (
    <Web title={'Je donne mon avis'}>
      <Section small>
        <Section.Title>
          Votre avis a bien été
          <br />
          pris en compte
        </Section.Title>
        <Text>
          Merci pour votre contribution ! C'est grâce à vos retours que nous
          construisons un service utile !
        </Text>
        {avis === 'non' && (
          <Form
            onSubmit={(e) => {
              e.preventDefault()

              if (avis && short_id) {
                api
                  .post(
                    `/newsletter/${short_id}/avis?appliquee=${avis}`,
                    { avis: message },
                    true
                  )
                  .then(() => setSuccess(true))
              }
            }}
          >
            <TextArea
              value={message}
              onChange={({ value }) => setMessage(value)}
              label='Aidez-nous à comprendre pourquoi vous n’allez pas appliquer cette recommandation en écrivant quelques mots'
            />
            <ButtonWrapper>
              <Button>Envoyer</Button>
            </ButtonWrapper>
            {success && <Alert>Merci de nous avoir envoyé votre avis</Alert>}
          </Form>
        )}
      </Section>
    </Web>
  )
}
