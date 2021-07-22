import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 5rem;
`
const Title = styled.h1`
  margin: 0 0 0 -0.15rem;
`
const Name = styled.span`
  font-size: 4rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.main};
`
const Date = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
`
const Details = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
`
export default function Header(props) {
  return (
    <Wrapper>
      <Title>
        <Name>{props.place.nom}</Name>
        <Date>
          , le{' '}
          {new Intl.DateTimeFormat('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format()}
        </Date>
      </Title>
      <Details>
        {props.place.codesPostaux.length > 2
          ? props.place.codesPostaux[0] +
            ' ... ' +
            props.place.codesPostaux[props.place.codesPostaux.length - 1]
          : props.place.codesPostaux.join(', ')}{' '}
        - {props.place.departement.nom}
      </Details>
    </Wrapper>
  )
}
