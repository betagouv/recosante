import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/LandingPollen'
import Mockup from 'src/components/home/Mockup'
import About from 'src/components/About'
import InfoPollen from 'src/components/landings/InfoPollen'

export default function Index() {
  return (
    <Web title={'Alerte pollen'}>
      <Landing />
      <Mockup />
      <InfoPollen />
      <About />
    </Web>
  )
}
