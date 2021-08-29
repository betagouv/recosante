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
    opacity: 0.2;

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
    transform: scaleX(${(props) => props.percent});
    transform-origin: left;
    transition: transform 600ms ease-in-out;

    ${(props) => props.theme.mq.medium} {
      display: block;
    }
  }
`
const Previous = styled(Button)`
  display: none;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  ${(props) => props.theme.mq.medium} {
    display: block;
  }
`
const Next = styled(Button)``
export default function Submit(props) {
  const [current, setCurrent] = useQueryParam('step')

  const steps = [
    'mail',
    'ville_insee',
    'recommandations',
    'notifications',
    'population',
    'activites',
    'enfants',
    'chauffage',
    'deplacement',
    'animaux_domestiques',
    'connaissance_produit',
  ]
  return (
    <Wrapper percent={steps.indexOf(current) / steps.length}>
      <Previous
        onClick={(e) => {
          e.preventDefault()
          setCurrent(
            steps.indexOf(current) > 0
              ? steps[steps.indexOf(current) - 1]
              : steps[0]
          )
        }}
        visible={steps.indexOf(current) > 0}
        type='button'
        hollow
        noExpand
      >
        Précédent
      </Previous>
      <Next onClick={props.onClick} fetching={props.fetching} noExpand>
        Valider
      </Next>
    </Wrapper>
  )
}
