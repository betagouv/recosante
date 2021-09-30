import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useUser, useUserMutation } from 'hooks/useUser'
import TextInput from 'src/components/base/TextInput'
import Button from 'src/components/base/Button'

const Wrapper = styled.form``
const Email = styled.h2`
  position: relative;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  cursor: pointer;
  word-break: break-all;

  &:before {
    content: 'Éditer';
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 300;
    text-decoration: underline;
  }
`
const StyledTextInput = styled(TextInput)`
  font-size: 1.5rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
export default function Mail() {
  const { data } = useUser()
  const mutation = useUserMutation()

  const [active, setActive] = useState(false)

  const [answer, setAnswer] = useState('')
  useEffect(() => {
    setAnswer(data && (data.mail ? data.mail : ''))
  }, [data])

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ mail: answer })
        setActive(false)
      }}
    >
      {active ? (
        <>
          <StyledTextInput
            name={'email'}
            value={answer}
            onChange={(e) => setAnswer(e.value)}
          />
          <Button fetching={mutation.isLoading}>Valider</Button>
        </>
      ) : (
        <Email onClick={() => setActive(true)}>{answer}</Email>
      )}
    </Wrapper>
  ) : null
}
