import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: calc(50%);
  transform: translate(-50%, -50%);
  width: 80rem;

  ${(props) => props.theme.mq.small} {
    width: 175vw;
  }
`
const Background = styled.div`
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '9rem')});
  transition: transform 600ms ease-out, opacity 600ms;
`
const Tablet = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '12rem')});
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: transform 600ms ease-out, opacity 600ms;
`
export default function Mockup(props) {
  return (
    <>
      <Wrapper className={props.className}>
        <Background isOnScreen={props.isOnScreen}>
          <StaticImage src={'./images/background.jpg'} alt='Ombre' />
        </Background>
        <Tablet isOnScreen={props.isOnScreen}>
          <StaticImage
            isOnScreen={props.isOnScreen}
            src={'./images/tablet.png'}
            alt='Tablette'
          />
        </Tablet>
      </Wrapper>
    </>
  )
}
