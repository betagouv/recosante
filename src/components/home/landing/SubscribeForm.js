import React, { useState } from 'react'
import styled from 'styled-components'

import Checkbox from 'src/components/base/Checkbox'
import Button from 'src/components/base/Button'
import MailInput from './subscribeForm/MailInput'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 36.5rem;
  margin: 0 auto;
`
const Optin = styled(Checkbox)`
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
`
const Submit = styled(Button)`
  align-self: flex-end;
  font-size: 1.375rem;
`
export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [optin, setOptin] = useState(false)
  return (
    <Wrapper
      method='post'
      onSubmit={(e) => {
        console.log('submit')
        e.preventDefault()
        e.stopPropagation()
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
        label={`Je consens à partager mes données personnelles avec l'équipe Recosanté`}
        checked={optin}
        onChange={(checked) => setOptin(checked)}
        small
      />
      <Submit submit>Créer mon profil</Submit>
    </Wrapper>
  )
}
