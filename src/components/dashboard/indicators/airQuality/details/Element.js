import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'

const Wrapper = styled.div`
  position: relative;
  padding-left: 2rem;
  line-height: 1.7;
  cursor: pointer;
  transition: color 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    width: 6rem;
    margin: 0 0 1rem 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${(props) => props.theme.colors.atmo[props.index]};
    border-radius: 0.25rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`
const Superscript = styled.sup`
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.main};
`
export default function Element(props) {
  const { setElement } = useContext(ModalContext)
  return props.value ? (
    <Wrapper index={props.value.indice} onClick={() => setElement(props.label)}>
      {props.label}
      <Superscript> (?)</Superscript>
    </Wrapper>
  ) : null
}
