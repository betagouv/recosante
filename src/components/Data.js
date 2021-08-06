import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/base/Section'

const Big = styled.div`
  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "data" }) {
          body
        }
      }
    `
  )

  return (
    <Section id='data' small>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Section>
  )
}
