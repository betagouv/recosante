import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'components/base/Section'
import Button from 'components/base/Button'

const StyledButton = styled(Button)`
  font-size: 1.25rem;
`

export default function AboutBaignades() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "about-baignades" }) {
          body
        }
      }
    `
  )

  return (
    <Section id='about-baignades' small>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Section>
  )
}