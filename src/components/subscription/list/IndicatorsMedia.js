import React from 'react'

import Question from 'components/subscription/Question'
import Email from './icons/Email'
import Notification from './icons/Notification'

export default function Indicators() {
  const name = 'indicateurs_media'
  const label =
    'Je choisis de quelle façon je souhaite recevoir ces indicateurs.'
  const options = [
    {
      value: 'email',
      label: `Email`,
      icon: <Email />,
    },
    {
      value: 'notifications',
      label: `Notification`,
      icon: <Notification />,
    },
  ]
  return <Question name={name} label={label} options={options} exclusive />
}
