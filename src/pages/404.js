import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import Button from 'src/components/base/Button'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function NotFound() {
  return (
    <Web title={'404'}>
      <StyledSection first tiny>
        <h1>404</h1>
        <p>Cette page n’existe pas (ou plus).</p>
        <Button to='/'>Retourner à l'accueil</Button>
      </StyledSection>
    </Web>
  )
}
