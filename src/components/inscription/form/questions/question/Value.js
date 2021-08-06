import React from 'react'
import styled from 'styled-components'
import { useQueryParam, StringParam } from 'use-query-params'

import useMounted from 'src/hooks/useMounted'

const Wrapper = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
  text-transform: ${(props) => (props.capital ? 'inherit' : 'lowercase')};
  cursor: pointer;
`
const Letter = styled.span`
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 500ms ${(props) => (props.index / props.total) * 500}ms;
`
export default function Value(props) {
  const mounted = useMounted()

  const [current, setCurrent] = useQueryParam('step', StringParam)

  return current !== props.name ? (
    <Wrapper onClick={() => setCurrent(props.name)} capital={props.capital}>
      {props.sentence.map((letter, index) => (
        <Letter
          key={index}
          index={index}
          total={props.sentence.length}
          mounted={mounted}
        >
          {letter}
        </Letter>
      ))}
    </Wrapper>
  ) : null
}
