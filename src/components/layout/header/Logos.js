import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Marianne from 'src/components/base/Marianne'
import Logo from 'src/components/misc/Logo'

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
`
export default function Logos() {
  return (
    <Wrapper to='/' aria-label='Accueil'>
      <Marianne />
      <Logo link />
    </Wrapper>
  )
}
