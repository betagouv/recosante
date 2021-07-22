import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Marianne from 'src/components/base/Marianne'
import Logo from 'src/components/misc/Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  margin-left: 1rem;
`
const StyledLogo = styled(Logo)`
  width: 6rem;
`
export default function Logos() {
  return (
    <Wrapper>
      <Link to='/'>
        <Marianne />
      </Link>
      <StyledLink to='/'>
        <StyledLogo link />
      </StyledLink>
    </Wrapper>
  )
}
