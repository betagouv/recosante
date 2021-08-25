import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import { useQueryParam, StringParam } from 'use-query-params'

import { useProfile, useProfileMutation } from 'src/utils/api'
import TextInput from 'src/components/base/TextInput'
import Wrapper from './question/Wrapper'
import Submit from './question/Submit'

const Email = styled.h3`
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`
const StyledTextInput = styled(TextInput)`
  font-size: 1.5rem;
`
export default function Mail() {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [answer, setAnswer] = useState([])
  useEffect(() => {
    setAnswer(data && (data.mail ? data.mail : ''))
  }, [data])

  const [current, setCurrent] = useQueryParam('step', StringParam)

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ mail: answer })
      }}
      visible={true}
    >
      {current !== 'mail' && (
        <Email onClick={() => setCurrent('mail')}>{answer}</Email>
      )}
      <Wrapper.Response visible={current === 'mail'}>
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
