import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import { useQueryParam, StringParam } from 'use-query-params'

import { useProfile, useProfileMutation } from 'src/utils/api'
import TextInput from 'src/components/base/TextInput'
import Wrapper from './question/Wrapper'

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
    setAnswer(data && (data.email ? data.email : 'test@test.com'))
  }, [data])

  const [current, setCurrent] = useQueryParam('step', StringParam)

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ email: answer })
      }}
      visible={true}
    >
      {current !== 'email' && (
        <Email onClick={() => setCurrent('email')}>{answer}</Email>
      )}
      <Wrapper.Response visible={current === 'email'}>
        <StyledTextInput
          name={'email'}
          value={answer}
          onChange={(e) => setAnswer(e.value)}
        />
        <Wrapper.Submit>Valider</Wrapper.Submit>
      </Wrapper.Response>
    </Wrapper>
  ) : null
}
