import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import About from 'src/components/About'

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Recosanté'}>
      <Landing content={data.mdx.body} main />
      <About />
    </Web>
  )
}
