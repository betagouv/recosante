import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  position: relative;
`
const Ios = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transform: translate(
    calc(-50% - 2rem),
    ${(props) => (props.isOnScreen ? 0 : 12)}rem
  );
  width: 21.5rem;
  transition: transform 600ms ease-out, opacity 600ms;
`
const Macos = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(
    calc(-50% + 2rem),
    ${(props) => (props.isOnScreen ? 6 : 15)}rem
  );
  width: 22.5rem;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: transform 600ms ease-out 100ms, opacity 600ms 100ms;
`
export default function Images(props) {
  return (
    <Wrapper className={props.className}>
      <Ios isOnScreen={props.isOnScreen}>
        <StaticImage src={'./images/ios.png'} alt='Notification iOS' />
      </Ios>
      <Macos isOnScreen={props.isOnScreen}>
        <StaticImage
          isOnScreen={props.isOnScreen}
          src={'./images/macos.png'}
          alt='Notification macOS'
        />
      </Macos>
    </Wrapper>
  )
}
