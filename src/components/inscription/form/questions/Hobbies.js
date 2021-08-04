import React from 'react'

import Step from './Step'

export default function Hobbies(props) {
  const name = 'activites'
  const label = ['Je fais du ', 'Je ne fait ']
  const options = [
    {
      value: 'jardinage',
      label: 'Jardinage',
    },
    {
      value: 'bricolage',
      label: 'Bricolage',
    },
    {
      value: 'menage',
      label: 'Ménage',
    },
    {
      value: 'sport',
      label: 'Sport',
      detail: {
        label: '(et activité physique adaptée)',
      },
    },
    {
      value: 'aucun',
      label: 'Aucun',
      answer: 'ni jardinage, ni bricolage, ni ménage, ni sport',
    },
  ]
  return <Step name={name} label={label} options={options} />
}
