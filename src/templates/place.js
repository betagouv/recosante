import React from 'react'

import Web from 'src/components/layout/Web'
import Dashboard from 'src/components/Dashboard'
import Newsletter from '../components/Newsletter'
import Data from 'src/components/Data'
import About from 'src/components/About'

export default function Place(props) {
  return (
    <Web title={props.pageContext.place.nom}>
      <Dashboard place={props.pageContext.place} />
      <Newsletter />
      <Data />
      <About />
    </Web>
  )
}
