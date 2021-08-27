import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import Questions from 'src/components/form/Questions'
import Side from 'src/components/form/Side'

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
