import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import Images from 'src/components/newsletter/notifications/Images'

const StyledImages = styled(Images)`
  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
export default function Notifications() {
  const [current] = useQueryParam('step')
  return <StyledImages isOnScreen={current === 'notifications'} />
}
