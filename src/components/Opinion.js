import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import { useAvis, useAvisMutation } from 'utils/api'
import Section from 'components/base/Section'
import TextArea from 'components/base/TextArea'
import Button from 'components/base/Button'
import Alert from 'components/base/Alert'

const Text = styled.p`
  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
const Form = styled.form``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default function Opinion() {
  const location = useLocation()

  const { data } = useAvis(location)
  const mutation = useAvisMutation(location)

  const [message, setMessage] = useState('')

  return (
    <Section small first>
      <Section.Title>
        Votre avis a bien été
        <br />
        pris en compte
      </Section.Title>
      <Text>
        Merci pour votre contribution ! C'est grâce à vos retours que nous
        construisons un service utile !
      </Text>
      {data && !data.appliquee && (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            mutation.mutate({ avis: message })
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
          {mutation.isSuccess ||
            (mutation.isError && (
              <Alert error={mutation.isError}>
                {mutation.isSuccess
                  ? 'Merci de nous avoir envoyé votre avis'
                  : 'Une erreur est survenue'}
              </Alert>
            ))}
        </Form>
      )}
    </Section>
  )
}
