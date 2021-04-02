import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'
import InfoPollen from 'src/components/landings/InfoPollen'

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction-pollen" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Alerte pollen'}>
      <Landing content={data.mdx.body} />
      <Mockup />
      <InfoPollen />
      <About />
    </Web>
  )
}
