import React from 'react'

import indicateursSteps from 'utils/indicateursSteps'
import recommandationsSteps from 'utils/recommandationsSteps'
import Step from './profile/Step'

export default function Profile() {
  return (
    <>
      {indicateursSteps.map((step) => (
        <Step step={step} />
      ))}
      {recommandationsSteps.map((step) => (
        <Step step={step} />
      ))}
    </>
  )
}
