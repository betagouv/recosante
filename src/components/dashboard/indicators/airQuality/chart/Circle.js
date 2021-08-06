import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.circle`
  transform: rotate(${(props) => 34 * props.index}deg);
  transform-origin: 71px 71.5px;
  opacity: ${(props) => (props.value ? 1 : 0)};
  fill: ${(props) => props.theme.colors.atmo[props.value]};
  transition: transform ${(props) => (props.value ? props.index * 300 : 0)}ms
      ${(props) => (props.value ? 300 : 0)}ms ease-out,
    opacity ${(props) => (props.value ? 300 : 0)}ms
      ${(props) => (props.value ? 300 : 0)}ms ease-out;
`
export default function Circle(props) {
  return (
    <Wrapper
      value={props.value}
      index={['bon', 'moyen', 'degrade', 'mauvais', 'tres-mauvais'].indexOf(
        props.value
      )}
      cx='7'
      cy='66'
      r='15.6471'
      stroke='#F4F7FC'
      strokeWidth='3'
    />
  )
}
