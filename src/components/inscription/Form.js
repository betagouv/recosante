import React, { useState } from 'react'
import styled from 'styled-components'

import Questions from './form/Questions'
import Illustrations from './form/Illustrations'
import RecommandationList from './form/RecommandationList'

const Wrapper = styled.div``
export default function Form() {
  const [current, setCurrent] = useState(0)

  return (
    <Wrapper>
      <Questions />
      {true ? <Illustrations /> : <RecommandationList />}
    </Wrapper>
  )
}
