import React from 'react'
import styled from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import UserProvider from 'components/providers/UserProvider'
import ModalProvider from 'components/providers/ModalProvider'

import Seo from './web/Seo'
import Header from './Header'
import Footer from './Footer'
import WrapperModal from 'components/modals/WrapperModal'
import SubscriptionModal from 'components/modals/SubscriptionModal'

const queryClient = new QueryClient()

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Fullscreen = styled.div`
  min-height: 100vh;
`
const Content = styled.div`
  flex: 1;
  padding: 0 1rem;
`
export default function Web(props) {
  return (
    <Wrapper>
      <Seo title={props.title} />
      <QueryClientProvider client={queryClient}>
        <StyleProvider>
          <UserProvider>
            <ModalProvider>
              <GlobalStyle />
              <Fullscreen>
                <Header />
                <Content>{props.children}</Content>
              </Fullscreen>
              <Footer />
              <WrapperModal />
              <SubscriptionModal />
            </ModalProvider>
          </UserProvider>
        </StyleProvider>
      </QueryClientProvider>
    </Wrapper>
  )
}
