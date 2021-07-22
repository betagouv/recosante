import React from 'react'

import Web from 'src/components/layout/Web'
import Search from 'src/components/home/Search'
import Mockup from 'src/components/home/Mockup'
import Integration from 'src/components/Integration'
import About from 'src/components/About'

export default function Index() {
  return (
    <Web title={`Recosanté`}>
      <Search />
      <Mockup />
      <Integration />
      <About />
    </Web>
  )
}
