import React from 'react'
import styled from 'styled-components'

import Logos from './header/Logos'

const Wrapper = styled.header`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75em;
  margin: 0 auto 4em;
  padding: 0 0.5em;
  background-color: white;

  ${(props) => props.theme.mq.medium} {
    position: fixed;
    top: 0;
    z-index: 120;
  }
`
export default function Header() {
  return (
    <Wrapper>
      <Logos />
    </Wrapper>
  )
}
