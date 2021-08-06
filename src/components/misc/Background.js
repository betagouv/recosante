import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1rem;
  right: -1rem;
  background: linear-gradient(90deg, #e9f5fd 0%, #f8fafd 49.48%, #e0f0fb 100%);
`
export default function Background() {
  return <Wrapper />
}
