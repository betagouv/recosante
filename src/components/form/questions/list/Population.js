import React, { useContext } from 'react'

import ModalContext from 'src/utils/ModalContext'
import Question from '../Question'

export default function Population(props) {
  const { setModal } = useContext(ModalContext)

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
        onClick: (e) => {
          e.stopPropagation()
          setModal('sensible')
        },
      },
    },
    {
      value: 'allergie_pollens',
      label: 'Aux personnes allergiques aux pollens',
    },
    {
      value: 'aucun',
      label: 'Aucun des deux',
      answer: 'Aux personnes vulnérables, allergiques ou sensibles',
    },
  ]

  return <Question name={name} label={label} options={options} />
}
