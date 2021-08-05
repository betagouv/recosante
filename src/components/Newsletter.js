import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/layout/Section'
import SubscribeForm from './newsletter/SubscribeForm'
import Mockup from './newsletter/Mockup'
import Notifications from './newsletter/Notifications'

const StyledSection = styled(Section)`
  display: flex;
`
const Content = styled.div`
  width: 41.75rem;
  margin-right: 2rem;

  p {
    max-width: 35.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;
`
export default function Newsletter() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction" }) {
          body
        }
      }
    `
  )

  return (
    <>
      <StyledSection>
        <Content>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <SubscribeForm />
        </Content>
        <MockupWrapper>
          <Mockup isOnScreen={true} />
        </MockupWrapper>
      </StyledSection>
      <Notifications />
    </>
  )
}
