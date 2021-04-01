import React from 'react'

import Web from 'src/components/layout/Web'

import What from 'src/components/doctors/What'
import How from 'src/components/doctors/How'
import Who from 'src/components/doctors/Who'
import Why from 'src/components/doctors/Why'
import You from 'src/components/doctors/You'
import About from 'src/components/About'

export default function Doctors() {
  return (
    <Web title={'Recosanté'}>
      <What />
      <How />
      <Who />
      <Why />
      <You />
      <About />
    </Web>
  )
}
