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
export default function Linkedin(props) {
  return (
    <Wrapper to='https://www.linkedin.com/showcase/datagir-ademe'>
      <Svg viewBox='0 0 512 512' fill='#fff'>
        <Background width='512' height='512' black={props.black} />
        <circle cx='142' cy='138' r='37' />
        <path stroke='#fff' strokeWidth='66' d='M244 194v198M142 194v198' />
        <path d='M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32' />
      </Svg>
    </Wrapper>
  )
}
