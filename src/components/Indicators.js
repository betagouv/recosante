import React, { useState } from 'react'
import styled from 'styled-components'

import steps from 'utils/indicateursSteps'
import Progress from './subscription/Progress'
import Question from './subscription/Question'
import Navigation from './subscription/Navigation'
import Recommandations from './subscription/Recommandations'
import Identity from './subscription/Identity'
import Notifications from './subscription/Notifications'

const Wrapper = styled.div``
export default function Indicators(props) {
  const [currentStep, setCurrentStep] = useState(0)

  const [modal, setModal] = useState(false)

  return (
    <Wrapper>
      <Progress currentStep={currentStep} steps={steps} />
      {steps[currentStep] ? (
        <>
          <Question step={steps[currentStep]} setModal={setModal} />
          <Navigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            steps={steps}
          />
        </>
      ) : currentStep === 'end' ? (
        'End'
      ) : currentStep === 'identity' ? (
        <Identity setPreviousStep={() => setCurrentStep(3)} />
      ) : (
        <Recommandations
          setCurrentStep={setCurrentStep}
          gotoDeepLastStep={() =>
            setCurrentStep((prevCurrentStep) => prevCurrentStep - 1)
          }
          small
        />
      )}
      <Notifications modal={modal} />
    </Wrapper>
  )
}
