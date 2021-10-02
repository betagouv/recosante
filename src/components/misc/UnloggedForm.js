import React, { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import MailInput from './unloggedForm/MailInput'

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 35.5rem;
  margin: 0 auto;
  padding-top: 1.5rem;
`
const Submit = styled(Button)`
  align-self: flex-end;
  font-size: 1.25rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
const Text = styled.p``
export default function UnloggedForm(props) {
  const [mail, setMail] = useState('')
  return (
    <Wrapper
      modal={props.modal}
      onSubmit={(e) => {
        e.preventDefault()
        window.alert('Fonction en cours de développement : ' + mail)
      }}
    >
      <Text>
        Entrez votre adresse email pour recevoir un lien vous permettant de
        changer vos préférences
      </Text>
      <MailInput
        type='email'
        name='email'
        label='Votre email'
        value={mail}
        onChange={({ value }) => setMail(value)}
      />

      <Submit>M'abonner</Submit>
    </Wrapper>
  )
}
