import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1900;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 1em);
  pointer-events: ${(props) => (props.open ? 'inherit' : 'none')};
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(${(props) => props.theme.colors.background}, 0.2);
  backdrop-filter: blur(1rem);
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: all ${(props) => (props.open ? '300ms' : 0)};
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.large ? '48rem' : '35.5rem')};
  max-width: calc(100% - 1rem);
  max-height: 90vh;
  margin: 0.5rem;
  background: rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);
  border: 1px solid rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.25rem 1rem 0
    rgba(${(props) => props.theme.colors.backgroundAlpha}, 0.4);

  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: scale(${(props) => (props.open ? 1 : 0.7)})
    translateY(${(props) => (props.open ? 0 : '10em')});
  transition: all ${(props) => (props.open ? '300ms' : 0)} ease-in-out;
`
const ButtonClose = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  font-size: 2em;
  font-weight: bold;
  transform: rotate(45deg);
  cursor: pointer;
  line-height: 0.5;
`
const Scroll = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 2rem 2rem 1.5rem;

  ${(props) => props.theme.mq.small} {
    padding: 1.5rem;
  }
`
export default function Modal(props) {
  return (
    <Wrapper open={props.open}>
      <Background open={props.open} onClick={() => props.setOpen(false)} />
      <Content
        open={props.open}
        large={props.large}
        textColor={props.textColor}
        backgroundColor={props.backgroundColor}
      >
        <ButtonClose onClick={() => props.setOpen(false)}>+</ButtonClose>
        <Scroll>{props.children}</Scroll>
      </Content>
    </Wrapper>
  )
}
