import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/layout/Section'

const Big = styled.div`
  font-size: 1.125rem;
`
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
      <Section.Title>Qui sommes-nous ?</Section.Title>
      <Big>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Big>
    </Section>
  )
}
