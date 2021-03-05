import React, { useRef } from 'react'
import styled from 'styled-components'

import useOnScreen from 'src/hooks/useOnScreen'
import Images from './mockup/Images'

const Wrapper = styled.div`
  position: relative;
  height: 35rem;
  margin-bottom: 5.5rem;
`
const Steps = styled.div`
  position: relative;
  top: 0;
  left: 50%;
`
const Step = styled.div`
  position: absolute;
  top: ${(props) => (props.index === 1 ? '11rem' : '21rem')};
  left: ${(props) => (props.index === 1 ? '-8.3rem' : '-6.3rem')};
  width: 10rem;
  height: 3px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.text};
    transform: scaleX(${(props) => (props.onScreen ? 1 : 0)});
    transform-origin: left;
    transition: transform 400ms ease-out ${(props) => props.index * 400 + 300}ms;
  }
`
const Text = styled.p`
  position: absolute;
  top: 50%;
  left: calc(100% + 1rem);
  transform: translateY(-50%);
  width: ${(props) => (props.index === 1 ? '13.7em' : '17em')};
  font-size: 1.25rem;
  margin: 0;
  opacity: ${(props) => (props.onScreen ? 1 : 0)};
  transition: opacity 800ms ease-out ${(props) => props.index * 400 + 600}ms;
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`
export default function Mockup() {
  const ref = useRef()

  const isOnScreen = useOnScreen(ref)
  return (
    <Wrapper ref={ref}>
      <Images onScreen={isOnScreen} />
      <Steps>
        <Step index={1} onScreen={isOnScreen}>
          <Text index={1} onScreen={isOnScreen}>
            Recevez chaque jour par <Color>email</Color> une{' '}
            <Color>recommandation</Color> adaptée à votre profil.
          </Text>
        </Step>
        <Step index={2} onScreen={isOnScreen}>
          <Text index={2} onScreen={isOnScreen}>
            Consultez les <Color>indicateurs environnementaux</Color> (qualité
            de l’air, épisodes de pollution et risque pollinique) liés à votre
            localisation afin d’adapter vos habitudes.
          </Text>
        </Step>
      </Steps>
    </Wrapper>
  )
}
