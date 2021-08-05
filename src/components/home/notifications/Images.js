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
    ${(props) => (props.isOnScreen ? 0 : 3)}rem
  );
  transition: transform 800ms ease-out, opacity 800ms;
`
const Macos = styled.div`
  position: absolute;
  top: 0;

  left: 50%;
  transform: translate(
    calc(-50% + 2rem),
    ${(props) => (props.isOnScreen ? 6 : 9)}rem
  );
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: transform 800ms ease-out 200ms, opacity 800ms 200ms;
`
export default function Images(props) {
  return (
    <Wrapper className={props.className}>
      <Ios isOnScreen={props.isOnScreen}>
        <StaticImage
          src={'./images/ios.png'}
          alt='Notification iOS'
          layout='fixed'
        />
      </Ios>
      <Macos isOnScreen={props.isOnScreen}>
        <StaticImage
          isOnScreen={props.isOnScreen}
          src={'./images/macos.png'}
          alt='Notification macOS'
          layout='fixed'
        />
      </Macos>
    </Wrapper>
  )
}
