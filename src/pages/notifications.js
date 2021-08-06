import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import SubscribeForm from 'src/components/misc/SubscribeForm'
import Mockup from 'src/components/notifications/Mockup'

const StyledSection = styled(Section)`
  display: flex;
`
const Content = styled.div`
  width: 41.75rem;
  margin-right: 2rem;

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  p {
    max-width: 35.5rem;
    font-size: 1.25rem;
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: -1;
`
export default function Notifications() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "notifications" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={`Notifications Web`}>
      <StyledSection first>
        <Content>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <SubscribeForm />
        </Content>
        <MockupWrapper>
          <Mockup />
        </MockupWrapper>
      </StyledSection>
    </Web>
  )
}
