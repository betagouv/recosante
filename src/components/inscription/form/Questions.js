import React from 'react'

import Mail from './questions/Mail'
import Address from './questions/Address'
import Population from './questions/Population'
import Hobbies from './questions/Hobbies'
import Family from './questions/Family'
import Heating from './questions/Heating'
import Transportation from './questions/Transportation'
import Animals from './questions/Animals'

export default function Questions() {
  return (
    <>
      <Mail />
      <Address />
      <Population />
      <Hobbies />
      <Family />
      <Heating />
      <Transportation />
      <Animals />
    </>
  )
}
