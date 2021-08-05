import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import Images from 'src/components/home/mockup/Images'

const StyledImages = styled(Images)`
  top: -9rem;
  left: calc(50% + 1rem);
`
export default function Frequency() {
  const [current] = useQueryParam('step')
  return (
    <div>
      <StyledImages isOnScreen={current === 'frequence'} />
    </div>
  )
}
