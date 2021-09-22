import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Step = styled.div`
  opacity: ${(props) => (props.current ? 1 : 0.5)};
`
export default function Progress(props) {
  return (
    <Wrapper>
      {props.steps.map((step, index) => (
        <Step current={index === props.currentStep}>{step.title}</Step>
      ))}
    </Wrapper>
  )
}
