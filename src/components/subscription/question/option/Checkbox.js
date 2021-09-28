import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid
    ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border-radius: ${(props) => (props.checkbox ? 0.5 : 1)}rem;
  transition: border 200ms ease-out;
`
const Check = styled.svg`
  width: auto;
  height: 1.4em;
  cursor: pointer;

  path {
    fill: none;
    stroke: ${(props) => props.theme.colors.main};
    stroke-width: 600;
    stroke-dasharray: 4322.794921875;
    stroke-dashoffset: ${(props) => (props.checked ? 0 : 4322.794921875)};
    transition: stroke-dashoffset ${(props) => (props.checked ? '200ms' : '0')}
      ease-out;
  }
`
export default function Checkbox(props) {
  return (
    <Wrapper checkbox={props.checkbox} active={props.active}>
      <Check
        checked={props.active}
        width='3213'
        height='2768'
        viewBox='0 0 3213 2768'
      >
        <path
          id='check'
          d='M165 1360C165 1360 1153 2220 1277 2336C1885.14 828 3101 224 3101 224'
        />
      </Check>
    </Wrapper>
  )
}
