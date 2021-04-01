import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

export default function inscriptionpatients(props) {
  return (
    <Web title={'Recommander Recosanté'}>
      <Section small>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query inscription {
    mdx(slug: { eq: "inscription-patients" }) {
      body
    }
  }
`
