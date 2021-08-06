import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'
import { useQueryParam } from 'use-query-params'

import { useProfile, useProfileMutation } from 'src/utils/api'
import Wrapper from './question/Wrapper'
import Value from './question/Value'
import Answers from './question/Answers'

export default function Step(props) {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [answers, setAnswers] = useState([])
  useEffect(() => {
    setAnswers(
      data && data[props.name]
        ? props.name === 'enfants'
          ? [data[props.name]]
          : data[props.name]
        : []
    )
  }, [data, props.name])

  const [sentence, setSentence] = useState([])
  useEffect(() => {
    setSentence(
      answers
        ? answers
            .map((answer, index) => {
              const sentence = props.options.find(
                (option) => option.value === answer
              )
                ? props.options.find((option) => option.value === answer)
                    .answer ||
                  props.options.find((option) => option.value === answer).label
                : ''
              return index === 0
                ? sentence + (index === answers.length - 1 ? '.' : '')
                : index > 0 && index < answers.length - 1
                ? `, ${sentence}`
                : ` et ${sentence}.`
            })
            .join('')
            .split('')
        : []
    )
  }, [answers, props.options])

  const [current] = useQueryParam('step')
  const isCurrent = current === props.name

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ [props.name]: answers })
      }}
      visible={answers.length || isCurrent}
    >
      <Wrapper.Label>
        {answers[0] === 'aucun' && !isCurrent ? props.label[1] : props.label[0]}
        <Value name={props.name} sentence={sentence} />
      </Wrapper.Label>

      <Wrapper.Response visible={isCurrent}>
        <Answers
          options={props.options}
          answers={answers}
          setAnswers={setAnswers}
        />
        <Wrapper.Submit>Valider</Wrapper.Submit>
      </Wrapper.Response>
    </Wrapper>
  ) : null
}
