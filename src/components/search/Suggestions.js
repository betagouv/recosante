import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 35rem;

  ${(props) => props.theme.mq.medium} {
    justify-content: center;
    margin: 0 auto;
  }
  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`
export default function Suggestions() {
  return (
    <Wrapper>
      <StyledButton hollow to='/place/75056/paris/'>
        Paris
      </StyledButton>
      <StyledButton hollow to='/place/31555/toulouse/'>
        Toulouse
      </StyledButton>
      <StyledButton hollow to='/place/69123/lyon/'>
        Lyon
      </StyledButton>
      <StyledButton hollow to='/place/44109/nantes/'>
        Nantes
      </StyledButton>
      <StyledButton hollow to='/place/13055/marseille/'>
        Marseille
      </StyledButton>
      <StyledButton hollow to='/place/25056/besancon/'>
        Besançon
      </StyledButton>
      <StyledButton hollow to='/place/33063/bordeaux/'>
        Bordeaux
      </StyledButton>
    </Wrapper>
  )
}
