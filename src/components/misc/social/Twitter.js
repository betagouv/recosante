import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  display: block;
  margin: 0 0.5em;

  &:hover {
    rect {
      fill: ${(props) => props.theme.colors.main};
    }
  }
`
const Svg = styled.svg`
  display: block;
  width: 2em;
`
const Background = styled.rect`
  fill: ${(props) =>
    props.black ? props.theme.colors.text : props.theme.colors.main};
  transition: fill 200ms;
`
export default function Twitter(props) {
  return (
    <Wrapper to='https://twitter.com/_datagir'>
      <Svg viewBox='0 0 512 512'>
        <Background width='512' height='512' black={props.black} />
        <path
          fill='#fff'
          d='M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37'
        />
      </Svg>
    </Wrapper>
  )
}
