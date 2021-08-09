import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "cookies" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Suivi des audiences et données personnelles'}>
      <Section first small>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
