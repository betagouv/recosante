import React from 'react'

import Web from 'components/layout/Web'

import Introduction from 'components/doctors/Introduction'
import Section1 from 'components/doctors/Section1'
import Section2 from 'components/doctors/Section2'
import Section3 from 'components/doctors/Section3'
import Section4 from 'components/doctors/Section4'
import Data from 'components/Data'
import About from 'components/About'

export default function Doctors() {
  return (
    <Web title={'Présentation'}>
      <Introduction />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Data />
      <About />
    </Web>
  )
}
