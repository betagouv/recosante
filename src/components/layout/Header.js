import React from 'react'
import styled from 'styled-components'

import Logos from './header/Logos'
import Search from './header/Search'

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 1rem;
  z-index: 1000;
  background: rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);

  ${(props) => props.theme.mq.medium} {
    position: absolute;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 73rem;
  margin: 0 auto;
`
export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Logos />
        <Search />
      </Content>
    </Wrapper>
  )
}
