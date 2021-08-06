import React from 'react'

import Web from 'src/components/layout/Web'
import Search from 'src/components/Search'
import Newsletter from '../components/Newsletter'
import Widget from 'src/components/Widget'
import Data from 'src/components/Data'
import About from 'src/components/About'

export default function Index() {
  return (
    <Web title={`Recosanté`}>
      <Search main />
      <Newsletter />
      <Widget home />
      <Data />
      <About />
    </Web>
  )
}
