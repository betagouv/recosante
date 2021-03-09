import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from 'src/utils/styles'
import 'src/utils/fonts.css'
import StyleProvider from 'src/components/providers/StyleProvider'
import ModalProvider from 'src/components/providers/ModalProvider'

import SEO from './web/SEO'
import Header from './Header'
import Footer from './Footer'
import SensibleModal from 'src/components/modals/SensibleModal'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Fullscreen = styled.div`
  min-height: 100vh;
`
const Content = styled.div`
  flex: 1;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.small} {
    padding: 0 1rem;
  }
`
export default function Web(props) {
  return (
    <Wrapper>
      <SEO title={props.title} />
      <StyleProvider>
        <ModalProvider>
          <GlobalStyle />
          <Fullscreen>
            <Header />
            <Content>{props.children}</Content>
          </Fullscreen>
          <Footer />
          <SensibleModal />
        </ModalProvider>
      </StyleProvider>
    </Wrapper>
  )
}
