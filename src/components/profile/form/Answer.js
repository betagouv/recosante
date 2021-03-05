import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
  text-transform: lowercase;
  cursor: pointer;
`
export default function Answer(props) {
  return (
    <Wrapper onClick={props.onClick}>
      {props.answers.map((answer, index) => {
        const sentence =
          props.options.find((option) => option.value === answer).answer ||
          props.options.find((option) => option.value === answer).label
        console.log(index, props.answers.length)
        return index === 0
          ? sentence
          : index > 0 && index < props.answers.length - 1
          ? `, ${sentence}`
          : ` et ${sentence}`
      })}
    </Wrapper>
  )
}
