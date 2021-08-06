import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'

export default function Index(props) {
  return (
    <Web title={'Suivi des audiences et données personnelles'}>
      <Section>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query cookies {
    mdx(slug: { eq: "cookies" }) {
      body
    }
  }
`
