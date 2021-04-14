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
       Le sport, ca fatigue beaucoup.
      </Big>
    </Section>
  )
}
