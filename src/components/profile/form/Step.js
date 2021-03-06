import React, { useState } from 'react'

import useMounted from 'src/hooks/useMounted'
import Wrapper from './Wrapper'
import Answer from './Answer'

export default function Step(props) {
  const [answers, setAnswers] = useState([])

  const [fetching, setFetching] = useState(false)

  const mounted = useMounted()
  return (
    <Wrapper
      mounted={mounted}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        if (answers.length) {
          setFetching(true)
          setTimeout(() => {
            setFetching(false)
            props.setAnswers(answers)
            if (props.setComplete) {
              props.setComplete(true)
            }
          }, 1000)
        }
      }}
    >
      <Wrapper.Label>
        {props.answers[0] !== 'none' ? props.label[0] : props.label[1]}
        {props.answers.length ? (
          <Answer
            answers={props.answers}
            options={props.options}
            onClick={() => props.setAnswers([])}
          />
        ) : null}
      </Wrapper.Label>
      {!props.answers.length && (
        <>
          <Wrapper.Answers>
            {props.options.map((option) => (
              <Wrapper.Checkbox
                key={option.value}
                label={option.label}
                detail={option.detail}
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
          <Wrapper.Submit disabled={!answers.length} fetching={fetching}>
            Valider
          </Wrapper.Submit>
        </>
      )}
    </Wrapper>
  )
}
