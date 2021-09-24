import React, { useState } from 'react'
import styled from 'styled-components'

import steps from 'utils/indicateursSteps'
import Progress from './subscription/Progress'
import Question from './subscription/Question'
import Navigation from './subscription/Navigation'
import Recommandations from './subscription/Recommandations'

const Wrapper = styled.div``
export default function Subscription() {
  const [currentStep, setCurrentStep] = useState(0)

  console.log(currentStep)
  return (
    <Wrapper>
      <Progress currentStep={currentStep} steps={steps} />
      {steps[currentStep] ? (
        <>
          <Question step={steps[currentStep]} />
          <Navigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            steps={steps}
          />
        </>
      ) : currentStep === 'end' ? (
        'End'
      ) : currentStep === 'identity' ? (
        'Identity'
      ) : (
        <Recommandations
          setCurrentStep={setCurrentStep}
          gotoDeepLastStep={() =>
            setCurrentStep((prevCurrentStep) => prevCurrentStep - 1)
          }
          small
        />
      )}
    </Wrapper>
  )
}
