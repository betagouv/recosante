import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useMounted from 'src/hooks/useMounted'

const Wrapper = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
  text-transform: ${(props) => (props.capital ? 'inherit' : 'lowercase')};
  cursor: pointer;
`
const Letter = styled.span`
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 500ms ${(props) => (props.index / props.total) * 500}ms;
`
export default function Answer(props) {
  const mounted = useMounted()
  const [sentence, setSentence] = useState([])

  console.log(props.answers)
  useEffect(() => {
    setSentence(
      props.answers
        .map((answer, index) => {
          const sentence =
            props.options.find((option) => option.value === answer).answer ||
            props.options.find((option) => option.value === answer).label
          return index === 0
            ? sentence + (index === props.answers.length - 1 ? '.' : '')
            : index > 0 && index < props.answers.length - 1
            ? `, ${sentence}`
            : ` et ${sentence}.`
        })
        .join('')
        .split('')
    )
  }, [props.answers, props.options, mounted])

  return (
    <Wrapper onClick={props.onClick} capital={props.capital}>
      {sentence.map((letter, index) => (
        <Letter
          key={index}
          index={index}
          total={sentence.length}
          mounted={mounted}
        >
          {letter}
        </Letter>
      ))}
    </Wrapper>
  )
}
