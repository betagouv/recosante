import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'
import InfoSport from 'src/components/landings/InfoSport'

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction-sport" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Sport'}>
      <Landing content={data.mdx.body} />
      <Mockup />
      <InfoSport />
      <About />
    </Web>
  )
}
