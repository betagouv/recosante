import React from 'react'

import Web from 'src/components/layout/Web'
import Search from 'src/components/Search'
import Newsletter from '../components/Newsletter'
import Data from 'src/components/Data'
import About from 'src/components/About'

export default function Index() {
  return (
    <Web>
      <Search main />
      <Newsletter />
      <Data />
      <About />
    </Web>
  )
}
