import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/base/Section'
import Mockup from './notifications/Mockup'
import Subscribe from './notifications/Subscribe'

const StyledSection = styled(Section)`
  display: flex;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const Content = styled.div`
  position: relative;
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
    <StyledSection first>
      <Content>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Subscribe />
      </Content>
      <MockupWrapper>
        <Mockup />
      </MockupWrapper>
    </StyledSection>
  )
}
