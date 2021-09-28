import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Button from 'components/base/Button'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 2rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 300ms;
`
const Image = styled.div`
  flex: 1;
  margin: 0 1rem;
`
const Content = styled.div`
  flex: 1;
`
const StyledButton = styled(Button)`
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
`
export default function Notifications(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "newsletter-modal" }) {
          body
        }
      }
    `
  )
  return (
    <Wrapper visible={props.modal === 'newsletter'}>
      <Image>
        <StaticImage
          src={'./newsletter/newsletter-preview.png'}
          alt='Newsletter'
          height={400}
        />
      </Image>
      <Content>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Content>
      <StyledButton onClick={() => props.setModal(false)}>
        J'ai compris
      </StyledButton>
    </Wrapper>
  )
}
