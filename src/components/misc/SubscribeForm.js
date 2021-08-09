import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import { useSubscribe } from 'src/utils/api'
import Checkbox from 'src/components/base/Checkbox'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'
import MailInput from './subscribeForm/MailInput'

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 29.25rem;
  margin: 0 auto;
  padding-top: 1.5rem;

  ${(props) => props.theme.mq.medium} {
    width: 31rem;
  }
  ${(props) => props.theme.mq.small} {
    width: auto;
    margin: 0 -1rem;
    padding: 2rem 1rem;
    background: linear-gradient(90deg, #d1edff 0%, #f8fafd 50%, #d6eeff 100%);
  }
`
const Optin = styled(Checkbox)`
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
`
const Submit = styled(Button)`
  align-self: flex-end;
  font-size: 1.25rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
const StyledAlert = styled(Alert)`
  position: absolute;
  top: 100%;
  width: 100%;
`
export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [optin, setOptin] = useState(false)
  const [error, setError] = useState(null)

  const location = useLocation()
  useEffect(() => {
    setEmail(queryString.parse(location.search).email || '')
  }, [location])

  const mutation = useSubscribe()

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()

        if (!email) {
          setError(`Vous devez entrer votre email pour vous inscrire`)
          return
        }
        if (!optin) {
          setError(
            `Vous devez accepter de recevoir des emails de la part de Recosanté pour vous abonner`
          )
          return
        }

        mutation.mutate(
          { mail: email },
          {
            onSuccess: (data) => {
              if (data && data.data && data.data.uid) {
                navigate(`/profil/?user=${data.data.uid}`)
              } else {
                setError('Une erreur est survenue')
              }
            },
            onError: () => {
              setError('Une erreur est survenue')
            },
          }
        )
      }}
    >
      <MailInput
        type='email'
        name='email'
        label='Votre email'
        value={email}
        onChange={({ value }) => setEmail(value)}
      />
      <Optin checked={optin} onChange={(checked) => setOptin(checked)} small>
        J'accepte de recevoir des emails de la part de Recosanté (pas de
        publicité)
      </Optin>
      <Submit fetching={mutation.isLoading}>M'abonner</Submit>
      {error ? <StyledAlert error>{error}</StyledAlert> : null}
    </Wrapper>
  )
}
