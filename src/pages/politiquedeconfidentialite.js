import React from 'react'
import { graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'

export default function Confidentiality(props) {
  return (
    <Web title={'Politique de Confidentialité'}>
      <Section first>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query confidentiality {
    mdx(slug: { eq: "politiquedeconfidentialite" }) {
      body
    }
  }
`
