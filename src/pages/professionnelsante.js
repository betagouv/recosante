import React from 'react'

import Web from 'src/components/layout/Web'

import Introduction from 'src/components/doctors/Introduction'
import Section1 from 'src/components/doctors/Section1'
import Section2 from 'src/components/doctors/Section2'
import Section3 from 'src/components/doctors/Section3'
import Section4 from 'src/components/doctors/Section4'
import About from 'src/components/About'

export default function Doctors() {
  return (
    <Web title={'Recosanté'}>
      <Introduction />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <About />
    </Web>
  )
}
