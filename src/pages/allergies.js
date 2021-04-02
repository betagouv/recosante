import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'

export default function Index(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction-allergies" }) {
          body
        }
      }
    `
  )
  return (
    <Web title={'Alerte allergies'}>
      <Landing content={data.mdx.body} />
      <Mockup />
      <About />
    </Web>
  )
}
