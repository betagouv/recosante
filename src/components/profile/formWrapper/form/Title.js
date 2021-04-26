import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  font-size: 2.9875rem;

  ${(props) => props.theme.mq.small} {
    font-size: 2rem;
  }
`
export default function Title(props) {
  return (
    <Wrapper>
      {props.inscription ? 'S’inscrire' : 'Mes préférences'}
    </Wrapper>
  )
}
