import React from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import { useProfile } from 'src/utils/api'

const Wrapper = styled.div``
export default function Mail() {
  const location = useLocation()
  const { data } = useProfile(location)
  return data ? <Wrapper>{data.email || 'test@test.com'}</Wrapper> : null
}
