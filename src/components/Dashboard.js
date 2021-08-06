import React from 'react'
import styled from 'styled-components'

import Section from 'src/components/base/Section'
import Background from 'src/components/misc/Background'
import Header from './dashboard/Header'
import Indicators from './dashboard/Indicators'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 10rem;
  padding: 10.75rem 0 6.5rem;

  ${(props) => props.theme.mq.medium} {
    margin-bottom: 5rem;
  }
`
const StyledSection = styled(Section)`
  position: relative;
  margin: 0 auto;
`
export default function Dashboard(props) {
  return (
    <Wrapper>
      <Background />
      <StyledSection xlarge>
        <Header place={props.place} />
        <Indicators place={props.place} />
      </StyledSection>
    </Wrapper>
  )
}
