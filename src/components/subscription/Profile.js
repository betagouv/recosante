import React from 'react'
import styled from 'styled-components'

import { useUser } from 'hooks/useUser'
import indicateursSteps from 'utils/indicateursSteps'
import recommandationsSteps from 'utils/recommandationsSteps'
import Mail from './profile/Mail'
import Step from './profile/Step'

export default function Profile() {
  const { data } = useUser()

  return (
    <>
      <Mail />
      {indicateursSteps.map((step) => (
        <Step
          step={step}
          large={step.name === 'indicateurs' || step.name === 'recommandations'}
        />
      ))}
      {data &&
        data['recommandations'] &&
        recommandationsSteps.map((step) => <Step step={step} />)}
    </>
  )
}
