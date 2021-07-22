import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled.div``
const Title = styled.h4`
  margin-bottom: 1rem;

  ${(props) => props.theme.mq.small} {
    text-align: center;
  }
`
const Logos = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -1rem;

  ${(props) => props.theme.mq.small} {
    justify-content: center;
  }
`

export default function Partners() {
  return (
    <Wrapper>
      <Title>Les données sont fournies par</Title>
      <Logos>
        <MagicLink to='https://atmo-france.org/'>atmo</MagicLink>
        <MagicLink to='https://www.pollens.fr/'>rnsa</MagicLink>
        <MagicLink to='https://www.alertepollens.org/'>pollens</MagicLink>
      </Logos>
    </Wrapper>
  )
}
