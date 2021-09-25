import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: ${(props) => (props.small ? 'absolute' : 'relative')};
  display: flex;
  width: ${(props) => (props.small ? 80 : 100)}%;

  &:before {
    content: '';
    position: absolute;
    top: ${(props) => (props.small ? 0 : '100%')};
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.main};
    opacity: ${(props) => (props.small ? 0 : 0.2)};
  }
  &:after {
    content: '';
    position: absolute;
    top: ${(props) => (props.small ? 0 : '100%')};
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.main};
    opacity: ${(props) => props.opacity};
    transform: scaleX(${(props) => props.percent});
    transform-origin: left;
    transition: transform 300ms ease-out;
  }
`
const Step = styled.div`
  flex: 1;
  padding: 0.5rem 0.25rem 0.25rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  opacity: ${(props) => (props.current ? 1 : 0.2)};
`
export default function Progress(props) {
  const percent =
    props.currentStep === 'identity'
      ? 1
      : (props.currentStep === props.steps.length
          ? props.currentStep
          : props.currentStep + 1) /
        (props.steps.length + (!props.small ? 1 : 0))

  return (
    <Wrapper
      percent={percent}
      small={props.small}
      opacity={props.currentStep === props.steps.length ? 0.2 : 1}
    >
      {props.steps.map((step, index) => (
        <Step
          key={step.name}
          current={
            index === props.currentStep ||
            (step.name === 'recommandations' && props.currentStep === 4)
          }
        >
          {step.title}
        </Step>
      ))}
      {!props.small && (
        <Step current={props.currentStep === 'identity'}>Identité</Step>
      )}
    </Wrapper>
  )
}
