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

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 41.75rem;
  margin-right: 2rem;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
    margin: 0 0 2rem;
  }

  ${(props) => props.theme.mq.small} {
    margin: 0 0 1rem;
  }
  p {
    max-width: 35.5rem;
    margin-bottom: 1em;
    font-size: 1.25rem;

    ${(props) => props.theme.mq.medium} {
      max-width: none;
    }

    ${(props) => props.theme.mq.small} {
      font-size: 1rem;
    }
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;

  ${(props) => props.theme.mq.medium} {
    min-height: 40rem;
    overflow: hidden;
    margin: -3rem 0;
  }
  ${(props) => props.theme.mq.small} {
    min-height: 165vw;
    overflow: hidden;
  }
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
