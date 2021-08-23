import React from 'react'

import Question from '../Question'

export default function Frequency() {
  const name = 'recommandations'
  const label = ['Je veux recevoir une recommandation par mail ']
  const options = [
    {
      value: 'hebdomadaire',
      label: 'Chaque lundi',
      exclusive: true,
      detail: {
        label: `et en cas d’alerte pollution ou pollen`,
      },
    },
    {
      value: 'quotidien',
      label: 'Tous les jours',
      exclusive: true,
      detail: {
        label: `accompagnée de l’indice de pollution de l’air<br/>et du risque d’allergie aux pollens`,
      },
    },
  ]
  return <Question name={name} label={label} options={options} />
}
