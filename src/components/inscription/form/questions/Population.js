import React from 'react'

import Step from './Step'

export default function Population(props) {
  const name = 'population'
  const label = [
    'Je souhaite recevoir des informations destinées ',
    'Je ne souhaite pas recevoir d’informations destinées ',
  ]
  const options = [
    {
      value: 'pathologie_respiratoire',
      label: 'Aux personnes vulnérables ou sensibles à la qualité de l’air',
      detail: {
        label: `Qu'est ce qu'une personne sensible<br />à la qualité de l'air ?`,
        onClick: () => console.log('click'),
      },
    },
    {
      value: 'allergie_pollens',
      label: 'Aux personnes allergiques aux pollens',
    },
    {
      value: 'aucun',
      label: 'Aucun des deux',
    },
  ]
  return (
    <Step name={name} label={label} options={options} current={props.current} />
  )
}
