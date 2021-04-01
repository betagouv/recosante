import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'
import InfoAsthme from 'src/components/landings/InfoAsthme'

export default function Index(props) {
  return (
    <Web title={'Alerte asthme'}>
      <Landing content={props.data.mdx.body} />
      <Mockup />
      <InfoAsthme />
      <About />
    </Web>
  )
}
export const pageQuery = graphql`
  query asthme {
    mdx(slug: { eq: "introduction-asthme" }) {
      body
    }
  }
`
