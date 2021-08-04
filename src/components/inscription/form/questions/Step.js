import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import { useProfile, useProfileMutation } from 'src/utils/api'
import Button from 'src/components/base/Button'
import Value from './step/Value'
import Answer from './step/Answer'
import AnswerNone from './step/AnswerNone'

const Wrapper = styled.form`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`
const Label = styled.div``
const Response = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`
const Answers = styled.div``
const Detail = styled.div``

export default function Step(props) {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [answers, setAnswers] = useState([])
  useEffect(() => {
    setAnswers(data && data[props.name] ? data[props.name] : [])
  }, [data])

  const isCurrent =
    location && queryString.parse(location.search).step === props.name
  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ [props.name]: answers })
      }}
      visible={answers.length || isCurrent}
    >
      <Label>
        {props.label[0]}
        <Value
          name={props.name}
          answers={props.name === 'enfants' ? [answers] : answers}
          options={props.options}
        />
      </Label>
      <Response visible={isCurrent}>
        <Answers>
          {props.options.map((option) =>
            option.value !== 'aucun' ? (
              <Answer
                value={option.value}
                answers={answers}
                setAnswers={setAnswers}
              >
                {option.label}
                {option.detail && (
                  <Detail
                    onClick={option.detail.onClick}
                    dangerouslySetInnerHTML={{
                      __html: option.detail.label,
                    }}
                  />
                )}
              </Answer>
            ) : (
              <AnswerNone answers={answers} setAnswers={setAnswers}>
                {option.label}
              </AnswerNone>
            )
          )}
        </Answers>
        <Button>Valider</Button>
      </Response>
    </Wrapper>
  ) : null
}
