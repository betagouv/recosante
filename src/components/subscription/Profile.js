import React from 'react'

import { useUser } from 'hooks/useUser'
import indicateursSteps from 'utils/indicateursSteps'
import recommandationsSteps from 'utils/recommandationsSteps'
import Mail from './profile/Mail'
import Address from './profile/Address'
import Step from './profile/Step'

export default function Profile() {
  const { data } = useUser()

  return (
    <>
      <Mail />
      <Address />
      {indicateursSteps.map((step) => (
        <Step
          step={step}
          key={step.name}
          large={step.name === 'indicateurs' || step.name === 'recommandations'}
        />
      ))}
      {data &&
        data['recommandations'] &&
        recommandationsSteps.map((step) => (
          <Step step={step} key={step.name} />
        ))}
    </>
  )
}
