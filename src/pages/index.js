import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'

export default function Index(props) {
  return (
    <Web title={'Recosanté'}>
      <Landing content={props.data.mdx.body} main />
      <Mockup />
      <About />
    </Web>
  )
}
export const pageQuery = graphql`
  query index {
    mdx(slug: { eq: "introduction" }) {
      body
    }
  }
`
