import React from 'react'
import styled from 'styled-components'

import Linkedin from './social/Linkedin'
import Twitter from './social/Twitter'
import Github from './social/Github'

const Wrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem 1rem;
`
export default function Social(props) {
  return (
    <Wrapper>
      <Twitter black={props.black} />
      <Linkedin black={props.black} />
      <Github black={props.black} />
    </Wrapper>
  )
}
