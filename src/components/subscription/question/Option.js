import React from 'react'
import styled from 'styled-components'

import Checkbox from './option/Checkbox'

const Wrapper = styled.div`
  position: relative;
`
const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  padding: 0.75rem;
  color: ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border: 0.25rem solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'main' : 'background']};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
  transition: all 200ms ease-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 24rem;
    transform: translate(-2rem, -4rem) rotate(45deg);
    transform-origin: top;
    background-color: ${(props) =>
      props.theme.colors[props.active ? 'background' : 'main']};
    opacity:  ${(props) => (props.active ? 0.2 : 0.1)};
  }
  &:hover {
    &:before {
      transform: translate(24rem, -4rem) rotate(45deg);
      transition: transform 400ms ease-out;
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) =>
      props.theme.colors[props.active ? 'background' : 'main']};
    opacity: 0.0;
  }
  &:focus {
    &:after {
      opacity: 0.2;
  }
`
const Icon = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  margin: 0 auto;
  line-height: 2.75rem;
  text-align: center;
  color: ${(props) => props.theme.colors[props.active ? 'main' : 'background']};
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'background' : 'main']};
`
const Label = styled.span`
  display: block;
  text-align: center;
`
const Detail = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.colors[props.onClick ? 'main' : 'text']};
  text-decoration: ${(props) => (props.onClick ? 'underline' : 'none')};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'normal')};
`
export default function Option(props) {
  return (
    <Wrapper>
      <Button
        active={props.active}
        onClick={props.onClick}
        disabled={props.option.disabled}
      >
        <Icon active={props.active}>{props.option.icon}</Icon>
        <Label
          dangerouslySetInnerHTML={{
            __html: props.option.label,
          }}
        />
        <Checkbox checkbox={props.checkbox} active={props.active} />
      </Button>
      {props.option.detail && (
        <Detail onClick={props.option.detail.onClick}>
          {props.option.detail.label}
        </Detail>
      )}
    </Wrapper>
  )
}
