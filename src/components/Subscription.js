import React, { useState } from 'react'
import styled from 'styled-components'

import Progress from './subscription/Progress'
import Navigation from './subscription/Navigation'
import Indicators from './subscription/list/Indicators'
import IndicatorsFrequency from './subscription/list/IndicatorsFrequency'
import IndicatorsMedia from './subscription/list/IndicatorsMedia'

const Wrapper = styled.div``
export default function Subscription() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { title: 'Indicateurs', question: <Indicators /> },
    { title: 'Fréquence', question: <IndicatorsFrequency /> },
    { title: 'Média', question: <IndicatorsMedia /> },
  ]
  return (
    <Wrapper>
      <Progress currentStep={currentStep} steps={steps} />
      {steps[currentStep].question}
      <Navigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={steps.length}
      />
    </Wrapper>
  )
}
