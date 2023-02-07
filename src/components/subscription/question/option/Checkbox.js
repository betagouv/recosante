import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  width: 1.75rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 0.125rem solid
    ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border-radius: ${(props) => (props.checkbox ? 0.5 : 0.875)}rem;
  transition: border 200ms ease-out, background-color 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    height: 1.5rem;
    width: 1.5rem;
  }
`
const Check = styled.svg`
  width: auto;
  height: 1.2rem;

  ${(props) => props.theme.mq.small} {
    height: 1rem;
  }

  path {
    fill: none;
    stroke: ${(props) => props.theme.colors.main};
    stroke-width: 600;
    stroke-dasharray: 4322.794921875;
    stroke-dashoffset: ${(props) => (props['data-checked'] ? 0 : 4322.794921875)};
    transition: stroke-dashoffset ${(props) => (props['data-checked'] ? 200 : 0)}ms
      ease-out;
  }
`
export default function Checkbox(props) {
  return (
    <Wrapper checkbox={props.checkbox} active={props.active} className={'box'}>
      <Check
        data-checked={props.active}
        width='3213'
        height='2768'
        viewBox='0 0 3213 2768'
      >
        <path
          class='check'
          d='M165 1360C165 1360 1153 2220 1277 2336C1885.14 828 3101 224 3101 224'
        />
      </Check>
    </Wrapper>
  )
}
