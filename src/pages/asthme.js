import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/LandingAsthme'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'

export default function Index() {
  return (
    <Web title={'Alerte asthme'}>
      <Landing />
      <Mockup />
      <About />
    </Web>
  )
}
