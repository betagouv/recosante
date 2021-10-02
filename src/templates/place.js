import React from 'react'

import Web from 'components/layout/Web'
import Dashboard from 'components/Dashboard'
import Newsletter from '../components/Newsletter'
import Data from 'components/Data'
import About from 'components/About'

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

export async function getServerData() {
  return { props: {} }
}
