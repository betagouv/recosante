import React from 'react'
import styled, { keyframes } from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const fetching = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
`

const Wrapper = styled(MagicLink)`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.expand ? '100%' : 'auto')};
  padding: 0.5em 1.5em;
  font-weight: bold;
  color: ${(props) => (props.hollow ? props.theme.colors.main : 'white')};
  text-decoration: none;
  background-color: ${(props) =>
    props.hollow ? 'transparent' : props.theme.colors.main};
  border: ${(props) => (props.thick ? '2px' : '1px')} solid
    ${(props) => props.theme.colors.main};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) =>
    props.disabled || props.fetching ? 'none' : 'inherit'};
  cursor: pointer;
  transition: opacity 200ms;

  ${(props) => props.theme.mq.small} {
    width: ${(props) => (props.noExpand ? 'auto' : '100%')};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.hollow ? props.theme.colors.main : props.theme.colors.background};
    opacity: ${(props) => (props.fetching ? '0.4' : '0')};
    animation: ${fetching} ${(props) => (props.fetching ? '600ms' : '0')}
      infinite;
  }
  &:hover {
  }

  & span {
    position: relative;
  }
`
export default function Button(props) {
  console.log(props.fetching)
  return (
    <Wrapper
      className={props.className}
      to={props.to}
      onClick={props.onClick}
      disabled={props.disabled}
      fetching={props.fetching}
      hollow={props.hollow ? 1 : 0}
      thick={props.thick ? 1 : 0}
      expand={props.expand ? 1 : 0}
      noExpand={props.noExpand ? 1 : 0}
      color={props.color}
      animationSpeed={
        props.children.length * 20 > 450 ? props.children.length * 25 : 450
      }
    >
      <span>{props.children}</span>
    </Wrapper>
  )
}
