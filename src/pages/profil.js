import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import Questions from 'src/components/profil/Questions'

const StyledSection = styled(Section)`
  display: flex;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
export default function Profile(props) {
  return (
    <Web title={'Profil'}>
      <StyledSection first>
        <Questions />
      </StyledSection>
    </Web>
  )
}
