import React from 'react'

import Question from '../Question'

export default function Notifications() {
  const name = 'notifications'
  const label = [
    'Je veux aussi recevoir les indicateurs sous forme de notifications web quotidiennes',
    'Je ne veux pas recevoir les indicateurs sous forme de notifications web quotidiennes',
  ]
  const options = [
    {
      value: 'oui',
      label: 'Oui',
      answer: '',
      exclusive: true,
      detail: {
        label: `qu'est ce que c'est ?`,
        onClick: () => console.log('click'),
      },
    },
    {
      value: 'non',
      label: 'Non',
      answer: '',
      exclusive: true,
    },
  ]
  return <Question name={name} label={label} options={options} />
}
