import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/base/Section'

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "about" }) {
          body
        }
      }
    `
  )

  return (
    <Section id='about' small>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Section>
  )
}
