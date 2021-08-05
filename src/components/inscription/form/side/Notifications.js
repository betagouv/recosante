import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import Images from 'src/components/home/notifications/Images'

const StyledImages = styled(Images)`
  position: absolute;
  margin-top: 10rem;
`
export default function Notifications() {
  const [current] = useQueryParam('step')
  return (
    <div>
      <StyledImages isOnScreen={current === 'notifications'} />
    </div>
  )
}
