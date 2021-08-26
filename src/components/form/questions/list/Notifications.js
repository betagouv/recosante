import React, { useContext } from 'react'

import ModalContext from 'src/utils/ModalContext'
import QuestionNotification from '../QuestionNotification'

export default function Notifications() {
  const { setModal } = useContext(ModalContext)

  const name = 'notifications'
  const label = [
    'Je veux aussi recevoir les indicateurs sous forme de notifications web quotidiennes',
    'Je ne veux pas recevoir les indicateurs sous forme de notifications web quotidiennes',
  ]
  const options = [
    {
      value: 'quotidien',
      label: 'Oui',
      answer: '',
      detail: {
        label: `qu'est ce que c'est ?`,
        onClick: (e) => {
          e.stopPropagation()
          setModal('notifications')
        },
      },
    },
    {
      value: 'aucun',
      label: 'Non',
      answer: '',
    },
  ]

  return <QuestionNotification name={name} label={label} options={options} />
}
