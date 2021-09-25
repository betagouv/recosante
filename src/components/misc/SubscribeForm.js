import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'
import useLocalUser from 'hooks/useLocalUser'
import Button from 'src/components/base/Button'
import MailInput from './subscribeForm/MailInput'

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.modal ? '100%' : '29.25rem')};
  margin: 0 auto;
  padding-top: 1.5rem;

  ${(props) => props.theme.mq.medium} {
    width: ${(props) => (props.modal ? '100%' : '31rem')};
  }
  ${(props) => props.theme.mq.small} {
    width: auto;
    margin: 0 -1rem;
    padding: 2rem 1rem;
    background: ${(props) =>
      props.modal
        ? 'none'
        : 'linear-gradient(90deg, #d1edff 0%, #f8fafd 50%, #d6eeff 100%)'};
  }
`
const Submit = styled(Button)`
  align-self: flex-end;
  font-size: 1.25rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`

export default function SubscribeForm(props) {
  const { user, mutateUser } = useLocalUser()
  const { setModal } = useContext(ModalContext)

  return (
    <Wrapper
      modal={props.modal}
      onSubmit={(e) => {
        e.preventDefault()

        if (!props.modal) {
          setModal('recommandations')
        }
      }}
    >
      <MailInput
        type='email'
        name='email'
        label='Votre email'
        value={user.mail}
        onChange={({ value }) => mutateUser({ mail: value })}
      />

      <Submit>M'abonner</Submit>
    </Wrapper>
  )
}
