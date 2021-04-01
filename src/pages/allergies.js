import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'

export default function Index(props) {
  return (
    <Web title={'Alerte allergies'}>
      <Landing content={props.data.mdx.body} />
      <Mockup />
      <About />
    </Web>
  )
}
export const pageQuery = graphql`
  query allergies {
    mdx(slug: { eq: "introduction-allergies" }) {
      body
    }
  }
`
