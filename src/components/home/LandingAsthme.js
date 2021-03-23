import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/layout/Section'
import SubscribeForm from './landing/SubscribeForm'

const StyledSection = styled(Section)`
  h1 {
    font-size: 2.9375rem;

    span {
      font-weight: 800;
    }

    ${(props) => props.theme.mq.medium} {
      font-size: 2.18rem;
    }
    ${(props) => props.theme.mq.small} {
      font-size: 1.73rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.335rem;
    text-align: justify;

    &:nth-child(2) {
      font-size: 1.43rem;
    }

    ${(props) => props.theme.mq.medium} {
      font-size: 1.25rem;
      text-align: left;

      &:nth-child(2) {
        font-size: 1.25rem;
      }
    }

    ${(props) => props.theme.mq.small} {
      font-size: 1rem;

      &:nth-child(2) {
        font-size: 1rem;
      }
    }
  }
`
export default function LandingAsthme(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction-asthme" }) {
          body
        }
      }
    `
  )
  return (
    <StyledSection>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <SubscribeForm />
    </StyledSection>
  )
}
