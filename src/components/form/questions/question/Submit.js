import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${(props) => props.theme.mq.medium} {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: space-between;
    padding: 1.25rem 1rem 1rem;
    background-color: ${(props) => props.theme.colors.background};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: none;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.main};
    opacity: 0;

    ${(props) => props.theme.mq.medium} {
      display: block;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: none;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.main};
    transform: scaleX(${(props) => props.current / props.total});
    transform-origin: left;
    transition: transform 600ms ease-in-out;

    ${(props) => props.theme.mq.medium} {
      display: block;
    }
  }
`
const Previous = styled(Button)`
  display: none;
  ${(props) => props.theme.mq.medium} {
    display: block;
  }
`
const Next = styled(Button)``
export default function Submit(props) {
  const [current, setCurrent] = useQueryParam('step')

  const steps = [
    'ville_insee',
    //'frequence',
    //'notifications',
    'population',
    'activites',
    'enfants',
    'chauffage',
    'deplacement',
    'animaux_domestiques',
    'connaissance_produit',
  ]
  return (
    <Wrapper>
      <Previous
        onClick={(e) => {
          e.preventDefault()
          setCurrent(steps[steps.indexOf(current) - 1])
        }}
        type='button'
        hollow
        noExpand
      >
        Précédent
      </Previous>
      <Next onClick={props.onClick} noExpand>
        Valider
      </Next>
    </Wrapper>
  )
}
