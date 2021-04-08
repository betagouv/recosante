import React from 'react'
import styled from 'styled-components'
import { FacebookMessengerShareButton } from 'react-share'

import Icon from './messenger/Icon'

const Wrapper = styled.a`
  display: none;
  ${(props) => props.theme.mq.medium} {
    display: block;
  }
`
const StyledFacebookMessengerShareButton = styled(FacebookMessengerShareButton)`
  display: block;
  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
export default function Messenger(props) {
  return (
    <>
      <Wrapper href={`fb-messenger://share?link=${props.url}`}>
        <Icon />
      </Wrapper>
      <StyledFacebookMessengerShareButton
        url={props.url}
        appId='537843153878579'
        onClick={() => {
          window._paq &&
            window._paq.push([
              'trackEvent',
              'Subscription',
              'Complete',
              'Messenger',
            ])
        }}
      >
        <Icon />
      </StyledFacebookMessengerShareButton>
    </>
  )
}
