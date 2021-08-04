import React from 'react'

import Step from './Step'

export default function Transportation(props) {
  const name = 'deplacement'
  const label = ['Je me déplace ', 'Je ne me déplace ']
  const options = [
    {
      value: 'velo',
      label: 'À vélo',
    },
    {
      value: 'tec',
      label: 'En transport en commun',
    },
    {
      value: 'voiture',
      label: 'En voiture',
    },
    {
      value: 'aucun',
      label: 'Aucun de ceux la',
      answer: 'ni à vélo, ni en transport en commun, ni en voiture',
    },
  ]
  return <Step name={name} label={label} options={options} />
}
