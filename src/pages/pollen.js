import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'
import InfoPollen from 'src/components/landings/InfoPollen'

export default function Index(props) {
  return (
    <Web title={'Alerte pollen'}>
      <Landing content={props.data.mdx.body} />
      <Mockup />
      <InfoPollen />
      <About />
    </Web>
  )
}
export const pageQuery = graphql`
  query pollen {
    mdx(slug: { eq: "introduction-pollen" }) {
      body
    }
  }
`
