import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'

export default function Confidentiality() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "politiquedeconfidentialite" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Politique de Confidentialité'}>
      <Section first small>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
