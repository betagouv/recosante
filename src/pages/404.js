import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Button from 'src/components/base/Button'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function NotFound() {
  return (
    <Web title={'404'}>
      <StyledSection tiny>
        <h1>404</h1>
        <p>Cette page n’existe pas (plus).</p>
        <Button to='/'>Retour à l'accueil</Button>
      </StyledSection>
    </Web>
  )
}
