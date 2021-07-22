import React from 'react'

import Web from 'src/components/layout/Web'
import Dashboard from 'src/components/place/Dashboard'
import Mockup from 'src/components/home/Mockup'
import Integration from 'src/components/Integration'
import About from 'src/components/About'

export default function Place(props) {
  return (
    <Web title={props.pageContext.place.nom}>
      <Dashboard place={props.pageContext.place} />
      <Mockup />
      <Integration />
      <About />
    </Web>
  )
}
