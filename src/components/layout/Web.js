import React from 'react'
import styled from 'styled-components'

import useWindowSize from 'src/hooks/useWindowSize'
import { GlobalStyle } from 'src/utils/styles'
import 'src/utils/fonts.css'
import StyleProvider from 'src/components/providers/StyleProvider'

import SEO from './web/SEO'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Fullscreen = styled.div`
  min-height: ${(props) => props.windowHeight}px;
`
const Content = styled.div`
  flex: 1;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.small} {
    padding: 0 1rem;
  }
`
export default function Web(props) {
  const { height } = useWindowSize()
  return (
    <Wrapper>
      <SEO title={props.title} />
      <StyleProvider>
        <GlobalStyle />
        <Fullscreen windowHeight={height}>
          <Header />
          <Content>{props.children}</Content>
        </Fullscreen>
        <Footer />
      </StyleProvider>
    </Wrapper>
  )
}
