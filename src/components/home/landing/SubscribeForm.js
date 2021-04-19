import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import api from 'src/utils/api'
import Checkbox from 'src/components/base/Checkbox'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'
import MailInput from './subscribeForm/MailInput'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 36.5rem;
  margin: 0 auto;

  ${(props) => props.theme.mq.small} {
    background-color: ${(props) => props.theme.colors.disabled};
    padding: 1rem;
  }
`
const Optin = styled(Checkbox)`
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
`
const Submit = styled(Button)`
  align-self: flex-end;
  font-size: 1.375rem;

  ${(props) => props.theme.mq.medium} {
    font-size: 1.25rem;
  }

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [optin, setOptin] = useState(false)
  const [error, setError] = useState(null)
  const [fetching, setFetching] = useState(false)

  const location = useLocation()
  useEffect(() => {
    setEmail(queryString.parse(location.search).email)
  }, [location])
  return (
    <Wrapper
      method='post'
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        if (!email) {
          setError(`Vous devez entrer votre email pour vous inscrire`)
          window._paq &&
            window._paq.push([
              'trackEvent',
              'Subscription',
              'Landing',
              'No mail',
            ])
          return
        }
        if (!optin) {
          setError(
            `Vous devez accepter de recevoir des courriers électroniques de la part de Recosanté pour vous inscrire`
          )
          window._paq &&
            window._paq.push([
              'trackEvent',
              'Subscription',
              'Landing',
              'No optin',
            ])
          return
        }

        window._paq &&
          window._paq.push([
            'trackEvent',
            'Subscription',
            'Landing',
            'Submit Mail',
          ])

        setFetching(true)
        api
          .post(`/inscription/premiere-etape`, {
            mail: email,
          })
          .then((res) => {
            setFetching(false)
            navigate(`/inscription/?user=${res.uid}`)
          })
          .catch((error) => {
            if ("mail" in error.json) {
              setError(error.json.mail[0])
            } else {
              setError(error.message)
            }
            window._paq &&
              window._paq.push([
                'trackEvent',
                'Subscription',
                'Landing',
                'Api error',
              ])
            setFetching(false)
          })
      }}
    >
      <MailInput
        type='email'
        name='email'
        label='Votre email'
        value={email}
        onChange={({ value }) => setEmail(value)}
      />
      <Optin
        label={`J'accepte de recevoir des courriers électroniques de la part de Recosanté`}
        checked={optin}
        onChange={(checked) => setOptin(checked)}
        small
      />
      <Submit submit fetching={fetching}>
        Créer mon profil
      </Submit>
      {error ? <Alert error>{error}</Alert> : null}
    </Wrapper>
  )
}
