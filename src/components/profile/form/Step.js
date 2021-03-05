import React, { useState } from 'react'

import Wrapper from './Wrapper'
import Answer from './Answer'

export default function Step(props) {
  const [answers, setAnswers] = useState([])

  const [fetching, setFetching] = useState(false)

  return (
    <Wrapper>
      <Wrapper.Label>
        {props.answers[0] !== 'none' ? props.label[0] : props.label[1]}
        <Answer
          answers={props.answers}
          options={props.options}
          onClick={() => props.setAnswers([])}
        />
      </Wrapper.Label>
      {!props.answers.length && (
        <>
          <Wrapper.Answers>
            {props.options.map((option) => (
              <Wrapper.Checkbox
                label={option.label}
                checked={answers.includes(option.value)}
                onChange={(checked) =>
                  setAnswers((prevAnswers) => {
                    if (option.value === 'none') {
                      return checked ? [option.value] : []
                    }
                    const tempAnswers = prevAnswers.filter(
                      (prevAnswer) =>
                        prevAnswer !== option.value && prevAnswer !== 'none'
                    )
                    return checked
                      ? [...tempAnswers, option.value]
                      : tempAnswers
                  })
                }
              />
            ))}
          </Wrapper.Answers>
          <Wrapper.Submit
            disabled={!answers.length}
            fetching={fetching}
            onClick={() => {
              setFetching(true)
              setTimeout(() => {
                setFetching(false)
                props.setAnswers(answers)
              }, 1000)
            }}
          >
            Valider
          </Wrapper.Submit>
        </>
      )}
    </Wrapper>
  )
}
