import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  font-size: 2.9875rem;

  ${(props) => props.theme.mq.small} {
    font-size: 2rem;
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
export default function Title(props) {
  return (
    <Wrapper>
      {props.inscription ? 'Créer mon' : 'Mon'} <Color>Profil</Color>
    </Wrapper>
  )
}
