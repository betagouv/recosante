import React, { useState, useEffect } from 'react'

import useStepPosition from 'src/hooks/useStepPosition'
import useSentence from 'src/hooks/useSentence'
import { useUser, useUserMutation } from 'hooks/useUser'
import Wrapper from './question/Wrapper'
import Value from './question/Value'
import Answers from './question/Answers'
import Submit from './question/Submit'

export default function Step(props) {
  const { data } = useUser()
  const mutation = useUserMutation()

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

  const sentence = useSentence(answers, props.options)

  const { setCurrent, isCurrent, isEnd } = useStepPosition(props.name)

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ [props.name]: answers })
      }}
      visible={answers.length || isCurrent}
      isCurrent={isCurrent}
      isEnd={isEnd}
    >
      <Wrapper.Label onClick={() => setCurrent(props.name)}>
        {answers[0] === 'aucun' && !isCurrent ? props.label[1] : props.label[0]}
        <Value name={props.name} sentence={sentence} />
      </Wrapper.Label>

      <Wrapper.Response visible={isCurrent}>
        <Answers
          options={props.options}
          answers={answers}
          setAnswers={setAnswers}
        />
        <Submit fetching={mutation.isLoading} />
      </Wrapper.Response>
    </Wrapper>
  ) : null
}
