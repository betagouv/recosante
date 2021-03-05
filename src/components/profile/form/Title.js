import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  font-size: 2.9875rem;
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
export default function Title(props) {
  return (
    <Wrapper>
      {props.complete ? 'Mon' : 'Créer mon'} <Color>Profil</Color>
    </Wrapper>
  )
}
