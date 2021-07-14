import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import Integration from 'src/components/Integration'
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
      <h1>Dashboard</h1>
      <Mockup />
      <Integration />
      <About />
    </Web>
  )
}
