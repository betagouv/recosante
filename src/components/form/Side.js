import React from 'react'
import styled from 'styled-components'

import Frequency from './side/Frequency'
import Notifications from './side/Notifications'
import RecommandationList from './side/RecommandationList'

const Wrapper = styled.div`
  position: relative;
  flex: 1;
`
export default function Illustrations() {
  return (
    <Wrapper>
      <Frequency />
      <Notifications />
      <RecommandationList />
    </Wrapper>
  )
}
