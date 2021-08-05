import React from 'react'

import Web from 'src/components/layout/Web'
import Search from 'src/components/Search'
import Newsletter from '../components/Newsletter'
import Integration from 'src/components/Integration'
import About from 'src/components/About'

export default function Index() {
  return (
    <Web title={`Recosanté`}>
      <Search />
      <Newsletter />
      <Integration />
      <About />
    </Web>
  )
}
