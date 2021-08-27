import React from 'react'
import styled from 'styled-components'

import useStepPosition from 'src/hooks/useStepPosition'
import Mockup from 'src/components/newsletter/Mockup'
import Question from '../Question'

const Wrapper = styled.div`
  position: relative;
`
const StyledMockup = styled(Mockup)`
  left: 190%;

  ${(props) => props.theme.mq.medium} {
    position: fixed;
    top: 75vw;
    left: 50%;
    display: ${(props) => (props.isOnScreen ? 'block' : 'none')};
    transform: translateX(-50%);
    width: 75vh;
  }
`
export default function Frequency() {
  const name = 'recommandations'
  const label = ['Je veux recevoir une recommandation par email ']
  const options = [
    {
      value: 'hebdomadaire',
      label: 'Chaque lundi',
      exclusive: true,
      detail: {
        label: `et en cas d’alerte pollution ou pollen`,
      },
    },
    {
      value: 'quotidien',
      label: 'Tous les jours',
      exclusive: true,
      detail: {
        label: `accompagnée de l’indice de pollution de l’air et du risque d’allergie aux pollens`,
      },
    },
  ]

  const { isCurrent } = useStepPosition(name)

  return (
    <Wrapper>
      <Question name={name} label={label} options={options} />
      <StyledMockup isOnScreen={isCurrent} />
    </Wrapper>
  )
}
