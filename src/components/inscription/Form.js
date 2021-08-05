import React from 'react'
import styled from 'styled-components'

import Questions from './form/Questions'
import Side from './form/Side'

const Wrapper = styled.div`
  display: flex;
`
export default function Form() {
  return (
    <Wrapper>
      <Questions />
      <Side />
    </Wrapper>
  )
}
