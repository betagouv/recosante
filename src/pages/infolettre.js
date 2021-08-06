import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import Widget from 'src/components/Widget'
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
    <Web title={`Lettre d'information`}>
      <Landing content={data.mdx.body} main />
      <Mockup />
      <Widget />
      <About />
    </Web>
  )
}
