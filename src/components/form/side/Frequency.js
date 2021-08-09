import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import Mockup from 'src/components/newsletter/Mockup'

const StyledMockup = styled(Mockup)`
  top: -10rem;
  transform: translateX(-50%);

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
export default function Frequency() {
  const [current] = useQueryParam('step')
  return <StyledMockup isOnScreen={current === 'frequence'} />
}
