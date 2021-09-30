import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import Profile from 'src/components/subscription/Profile'

const StyledSection = styled(Section)``
export default function Profil(props) {
  return (
    <Web title={'Profil'}>
      <StyledSection first>
        <Profile />
      </StyledSection>
    </Web>
  )
}
