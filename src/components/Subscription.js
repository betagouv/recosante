import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
export default function Subscription() {
  const [currentStep, setCurrentStep] = useState(0)

  return <Wrapper>{currentStep}</Wrapper>
}
