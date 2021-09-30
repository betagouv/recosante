import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useUser, useUserMutation } from 'hooks/useUser'
import TextInput from 'src/components/base/TextInput'
import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  height: 3.5rem;
  margin-bottom: 4rem;
`
const Email = styled.h2`
  position: relative;
  cursor: pointer;
  word-break: break-all;

  &:before {
    content: 'Éditer';
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 0;
    font-size: 0.875rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.main};
    text-decoration: underline;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 22.25rem;
`
const StyledTextInput = styled(TextInput)`
  font-size: 1.25rem;
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
    <Wrapper>
      {active ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            mutation.mutate({ mail: answer })
            setActive(false)
          }}
        >
          <StyledTextInput
            name={'email'}
            value={answer}
            onChange={(e) => setAnswer(e.value)}
          />
          <Button fetching={mutation.isLoading} noExpand>
            Valider
          </Button>
        </Form>
      ) : (
        <Email onClick={() => setActive(true)}>{data.mail}</Email>
      )}
    </Wrapper>
  ) : null
}
