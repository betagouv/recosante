import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Button from 'components/base/Button'
import Images from 'components/newsletter/notifications/Images'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 2rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 300ms;
`
const ImagesWrapper = styled.div`
  height: 15.1rem;
`
const StyledButton = styled(Button)`
  align-self: flex-end;
`
export default function Notifications(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "notifications-modal" }) {
          body
        }
      }
    `
  )
  return (
    <Wrapper visible={props.modal === 'notifications'}>
      <ImagesWrapper>
        <Images isOnScreen={true} />
      </ImagesWrapper>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <StyledButton onClick={() => props.setModal(false)}>
        J'ai compris
      </StyledButton>
    </Wrapper>
  )
}