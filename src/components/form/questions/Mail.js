import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import { useProfile, useProfileMutation } from 'src/utils/api'
import TextInput from 'src/components/base/TextInput'
import Wrapper from './question/Wrapper'
import Submit from './question/Submit'

const Email = styled.h3`
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  word-break: break-all;
  ${(props) => props.theme.mq.small} {
    font-size: 1.25rem;
  }
`
const StyledTextInput = styled(TextInput)`
  font-size: 1.5rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
export default function Mail() {
  const { data } = useProfile()
  const mutation = useProfileMutation()

  const [answer, setAnswer] = useState([])
  useEffect(() => {
    setAnswer(data && (data.mail ? data.mail : ''))
  }, [data])

  const [current, setCurrent] = useQueryParam('step')
  const isCurrent = current === 'mail'

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ mail: answer })
      }}
      visible
      isCurrent={isCurrent}
      isEnd={current === 'end'}
    >
      {current !== 'mail' && (
        <Email onClick={() => setCurrent('mail')}>{answer}</Email>
      )}
      <Wrapper.Response visible={isCurrent}>
        <StyledTextInput
          name={'email'}
          value={answer}
          onChange={(e) => setAnswer(e.value)}
        />
        <Submit />
      </Wrapper.Response>
    </Wrapper>
  ) : null
}
