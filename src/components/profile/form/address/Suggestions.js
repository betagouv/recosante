import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 9.9em;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0 0 0.25rem 0.25rem;
  overflow-y: scroll;
  opacity: ${(props) => (props.focus ? 1 : 0)};
  visibility: ${(props) => (props.focus ? 'inherit' : 'hidden')};
  transition: visibility 0ms 200ms;
`
const Suggestion = styled.div`
  padding: 0.2em 0.75em;
  cursor: pointer;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.tile};
  }

  span {
    font-size: 1rem;
  }
`
export default function Suggestions(props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(false)
  }, [props.suggestions])

  return (
    <Wrapper focus={props.focus} onScroll={() => setScrolled(true)}>
      {props.suggestions.map(
        (suggestion, index) =>
          (index < 10 || scrolled) &&
          index < 100 && (
            <Suggestion
              onClick={() => {
                props.setSearch(suggestion.nom)
                props.setCode(suggestion.code)
              }}
            >
              <span>
                {suggestion.nom} ({suggestion.code})
              </span>
            </Suggestion>
          )
      )}
    </Wrapper>
  )
}
