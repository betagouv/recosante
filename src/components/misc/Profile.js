import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  width: 50%;
  margin-bottom: 1rem;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.medium} {
    padding: 0 0.5rem;
  }
  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 1.5rem 1.5rem 1.8125rem;
  background-color: ${(props) => props.theme.colors.tile};

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.3125rem;
    background-color: ${(props) => props.theme.colors.main};
  }

  ${(props) => props.theme.mq.medium} {
    padding: 1rem 1rem calc(1rem + 0.3125rem);
  }
`
const Title = styled.h3`
  align-self: flex-start;
  margin-bottom: 2rem;
`
const Quote = styled.blockquote`
  margin: 0 1.5rem 1rem;

  &:before {
    content: '“ ';
    display: inline-block;
    margin: 0 0.25rem 0 -0.5em;
    color: ${(props) => props.theme.colors.main};
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0;
  }
  &:after {
    content: ' „';
    display: inline-block;
    margin: 0 -0.5em 0 0.25rem;
    color: ${(props) => props.theme.colors.main};
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
`
export default function Profile(props) {
  return (
    <Wrapper>
      <Content>
        <Title>{props.title}</Title>
        <Quote>{props.quote}</Quote>
        {props.link && (
          <Buttons>
            <Button to={props.link}>{props.label}</Button>
          </Buttons>
        )}
      </Content>
    </Wrapper>
  )
}
