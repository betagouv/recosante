import React from 'react'
import styled from 'styled-components'

import Card from 'components/misc/Card'
import Vent from './images/Vent.png'
import Orages from './images/Orages.png'
import Neige from './images/Neige.png'
import Avalanches from './images/Avalanches.png'
import Crues from './images/Crues.png'
import GrandFroid from './images/GrandFroid.png'
import PluieInondation from './images/PluieInondation.png'

const Wrapper = styled.div``
const Title = styled.h4`
  display: flex;
  align-items: center;
  font-weight: normal;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};
`
const Icon = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  padding: 0.25rem;
  background-color: ${(props) =>
    props.theme.colors.vigilancemeteo[props.value]};
  border-radius: 0.25rem;
`
export default function Element(props) {
  const images = {
    Vent,
    Orages,
    Neige,
    Avalanches,
    Crues,
    'Grand Froid': GrandFroid,
    'Pluie-Inondation': PluieInondation,
  }
  const value = ['Vert', 'Jaune', 'Orange', 'Rouge'].indexOf(props.indice.color)

  return (
    <Wrapper>
      <Title>
        <Icon value={value}>
          <img src={images[props.indice.label]} alt={props.indice.label} />
        </Icon>
        {props.indice.label}
      </Title>
      {props.indice.advice && (
        <Card.Recommandation
          dangerouslySetInnerHTML={{
            __html: props.indice.advice.main,
          }}
        />
      )}
    </Wrapper>
  )
}