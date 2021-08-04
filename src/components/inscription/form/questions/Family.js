import React from 'react'

import Step from './Step'

export default function Family(props) {
  const name = 'enfants'
  const label = ['Je vis ', 'Je vis ']
  const options = [
    {
      value: 'oui',
      label: 'Avec un enfant',
      detail: {
        label: '(ou plusieurs)',
      },
    },
    {
      value: 'aucun',
      label: 'Sans enfant',
    },
  ]
  return <Step name={name} label={label} options={options} />
}
