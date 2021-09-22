import React from 'react'

import Question from 'components/subscription/Question'
import IndiceAtmo from './icons/IndiceAtmo'
import Raep from './icons/Raep'
import IndiceUv from './icons/IndiceUv'
import VigilanceMeteorologique from './icons/VigilanceMeteorologique'

export default function Indicators() {
  const name = 'indicateurs'
  const label = 'Je choisis les indicateurs que je souhaite recevoir.'
  const options = [
    {
      value: 'indice_atmo',
      label: `Indice de qualité de l'air`,
      icon: <IndiceAtmo />,
    },
    {
      value: 'raep',
      label: `Risque d'allergie aux pollens`,
      icon: <Raep />,
    },
    {
      value: 'indice_uv',
      label: `Indice UV`,
      icon: <IndiceUv />,
      disabled: true,
    },
    {
      value: 'vigilance_meteorologique',
      label: `Vigilance météorologique`,
      icon: <VigilanceMeteorologique />,
      disabled: true,
    },
  ]
  return <Question name={name} label={label} options={options} />
}
