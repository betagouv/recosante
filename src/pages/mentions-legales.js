import React from 'react'
import { graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'

export default function Index(props) {
  return (
    <Web title={'Mentions Légales'}>
      <Section>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query terms {
    mdx(slug: { eq: "mentions-legales" }) {
      body
    }
  }
`
