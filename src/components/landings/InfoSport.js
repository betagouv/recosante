import React from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'

const Big = styled.div`
  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function InfoPollen() {

  return (
    <Section id='alertepollen' small>
      <Section.Title>Le saviez-vous ?</Section.Title>
      <Big>
       Lorsque vous pratiquez un effort physique, la quantité d'air inhalé est 7 à 8 fois plus importante qu'au repos. Vous êtes donc plus exposé à la pollution de l'air.
      </Big>
       Même si les bénéfices de l'activité physique pour la santé sont largement supérieurs aux risques induits par la pollution de l'air, il existe des conseils simples à mettre en oeuvre au quotidien pour réduire son exposition aux polluants atmosphériques lors de ses activités physiques à l’extérieur.
      </Big>
    </Section>
  )
}
