import React from 'react'
import styled from 'styled-components'

import Logos from './header/Logos'
import Progress from './header/Progress'

const Wrapper = styled.header`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto 4rem;
  padding: 0.5rem 0.5rem 0;

  ${(props) => props.theme.mq.small} {
    margin: 0 auto 2rem;
    padding: 1rem 0.5rem 0;
  }
`
export default function Header() {
  return (
    <Wrapper>
      <Progress />
      <Logos />
    </Wrapper>
  )
}
