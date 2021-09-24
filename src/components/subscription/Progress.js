import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  border: 1px solid;
`
const Step = styled.div`
  flex: 1;
  opacity: ${(props) => (props.current ? 1 : 0.5)};
`
export default function Progress(props) {
  return (
    <Wrapper>
      {props.steps.map((step, index) => (
        <Step
          current={
            index === props.currentStep ||
            (step.name === 'recommandations' && props.currentStep === 4)
          }
        >
          {step.title}
        </Step>
      ))}
    </Wrapper>
  )
}
