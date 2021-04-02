import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'
import InfoAsthme from 'src/components/landings/InfoAsthme'

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction-asthme" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Alerte asthme'}>
      <Landing content={data.mdx.body} />
      <Mockup />
      <InfoAsthme />
      <About />
    </Web>
  )
}
