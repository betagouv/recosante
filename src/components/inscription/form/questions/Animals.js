import React from 'react'

import Step from './Step'

export default function Animals(props) {
  const name = 'animaux_domestiques'
  const label = [`J'ai `, `Je n'ai pas `]
  const options = [
    {
      value: 'chat',
      label: 'Un chat',
      detail: {
        label: '(ou plusieurs)',
      },
    },
    {
      value: 'chien',
      label: 'Un chien',
      detail: {
        label: '(ou plusieurs)',
      },
    },
    {
      value: 'aucun',
      label: 'Aucun des deux',
      answer: 'de chien ou de chat',
    },
  ]
  return <Step name={name} label={label} options={options} />
}
