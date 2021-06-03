import React from 'react'
import styled from 'styled-components'

import Range from 'src/components/base/Range'
import Address from './options/Address'

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.tile};
  box-shadow: inset 0.25rem 0 0 0 ${(props) => props.theme.colors.main};

  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
const Title = styled.h2`
  ${(props) => props.theme.mq.small} {
    font-size: 1.25rem;
  }
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors['text']};
`
export default function Options(props) {
  return (
    <Wrapper>
      <Title>Options</Title>
      <Address insee={props.insee} setInsee={props.setInsee} />

      <Label htmlFor='size'>Modifier la taille</Label>
      <Range
        id='size'
        name='size'
        min={12}
        max={18}
        step={2}
        start='plus petit'
        end='plus grand'
        value={props.size}
        onChange={(e) => props.setSize(e.target.value)}
      />
    </Wrapper>
  )
}
