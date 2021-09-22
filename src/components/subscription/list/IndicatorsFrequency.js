import React from 'react'

import Question from 'components/subscription/Question'
import Daily from './icons/Daily'
import Alert from './icons/Alert'

export default function IndicatorsFrequency() {
  const name = 'indicateurs_frequence'
  const label =
    'Je choisis à quelle fréquence je souhaite recevoir ces indicateurs.'
  const options = [
    {
      value: 'quotidien',
      label: `Tous les jours`,
      icon: <Daily />,
    },
    {
      value: 'alerte',
      label: `En cas d'alerte`,
      icon: <Alert />,
    },
  ]
  return <Question name={name} label={label} options={options} exclusive />
}
