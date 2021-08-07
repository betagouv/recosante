import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1rem;
  right: -1rem;
  background: linear-gradient(90deg, #d1edff 0%, #f8fafd 50%, #d6eeff 100%);
`
export default function Background() {
  return <Wrapper />
}
