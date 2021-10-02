import React from 'react'

import Web from 'components/layout/Web'
import Search from 'components/Search'
import Newsletter from '../components/Newsletter'
import Data from 'components/Data'
import About from 'components/About'

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
