import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: -10.5rem;
  left: calc(50% + 16.25rem);
  transform: translateX(-50%);
  width: 73.5625rem;

  ${(props) => props.theme.mq.medium} {
    top: -7rem;
    left: calc(50% + 12rem);
    width: 50rem;
  }
  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
const Background = styled.div`
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '3rem')});
  transition: transform 800ms ease-out, opacity 800ms;
`
const Tablet = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '6rem')});
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: transform 800ms ease-out, opacity 800ms;
`
const Mobile = styled.div`
  display: none;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mq.small} {
    display: block;
    width: 100%;
  }
`
export default function Mockup(props) {
  return (
    <>
      <Wrapper>
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
      <Mobile isOnScreen={props.isOnScreen}>
        <StaticImage src={'./images/mobile.png'} alt='Tablette' />
      </Mobile>
    </>
  )
}
