import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import api from 'src/utils/api'
import useDebounce from 'src/hooks/useDebounce'
import TextInput from 'src/components/base/TextInput'
import Suggestions from 'src/components/profile/formWrapper/form/address/Suggestions'

const Wrapper = styled.div`
  position: relative;
  max-width: 17rem;
  margin-bottom: 3rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors[props.error ? 'error' : 'text']};
`
const Input = styled(TextInput)`
  margin: 0;
`
const Code = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 2px 0;
  padding: calc(0.5em - 2px);
  background-color: ${(props) => props.theme.colors.input};
  pointer-events: none;
`
export default function Address(props) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const [code, setCode] = useState(null)

  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 2) {
      api
        .get(
          `https://geo.api.gouv.fr/communes?&boost=population&limit=100&fields=nom,code,codesPostaux&nom=${debouncedSearch}`
        )
        .then((res) => setSuggestions(res))
    } else {
      setSuggestions([])
    }
  }, [debouncedSearch])

  const [focus, setFocus] = useState(false)

  return (
    <Wrapper>
      <Label htmlFor={props.name} error={props.error}>
        Préremplir une ville
      </Label>
      <Input
        name={'address'}
        autoComplete='off'
        value={search}
        onChange={({ value }) => {
          setSearch(value)
          setCode(null)
          props.setInsee(null)
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {code && <Code>({code})</Code>}
      <Suggestions
        suggestions={suggestions}
        focus={focus}
        setFocus={setFocus}
        setSearch={setSearch}
        setCode={setCode}
        setInsee={props.setInsee}
      />
    </Wrapper>
  )
}
