import React from 'react'

import Web from 'src/components/layout/Web'
import Search from 'src/components/Search'
import Newsletter from '../components/Newsletter'
import Widget from 'src/components/Widget'
import Data from 'src/components/Data'
import About from 'src/components/About'

export default function NewsletterPage() {
  return (
    <Web title={`Lettre d'information`}>
      <Newsletter first />
      <Search />
      <Widget />
      <Data />
      <About />
    </Web>
  )
}
