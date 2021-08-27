import React, { useContext } from 'react'
import styled from 'styled-components'

import useStepPosition from 'src/hooks/useStepPosition'
import ModalContext from 'src/utils/ModalContext'
import QuestionNotification from '../QuestionNotification'
import Images from 'src/components/newsletter/notifications/Images'

const Wrapper = styled.div`
  position: relative;
`
const StyledImages = styled(Images)`
  left: calc(100% + 20.875rem);
  top: 0;
  position: absolute;

  ${(props) => props.theme.mq.medium} {
    position: relative;
    left: 0;
    top: 100%;
    display: ${(props) => (props.isOnScreen ? 'block' : 'none')};
  }
`
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

  const { isCurrent } = useStepPosition(name)

  return (
    <Wrapper>
      <QuestionNotification name={name} label={label} options={options} />{' '}
      <StyledImages isOnScreen={isCurrent} />
    </Wrapper>
  )
}
