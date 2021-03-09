import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import api from 'src/utils/api'
import ProfileContext from 'src/utils/ProfileContext'
import useDebounce from 'src/hooks/useDebounce'
import TextInput from 'src/components/base/TextInput'
import Wrapper from './Wrapper'
import Answer from './Answer'
import Suggestions from './address/Suggestions'

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

  const { address, setAddress } = useContext(ProfileContext)

  const [code, setCode] = useState(null)

  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 2) {
      api
        .get(
          `https://geo.api.gouv.fr/communes?&boost=population&limit=100&fields=nom,code&nom=${debouncedSearch}`
        )
        .then((res) => setSuggestions(res))
    } else {
      setSuggestions([])
    }
  }, [debouncedSearch])

  const [fetching, setFetching] = useState(false)

  const [focus, setFocus] = useState(false)

  return (
    <Wrapper
      className={props.className}
      mounted={true}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        if (code) {
          setFetching(true)
          setAddress({ name: search, code }).then(() => setFetching(false))
        }
      }}
    >
      <Wrapper.Label htmlFor={'address'}>
        J'habite à{' '}
        {address.code ? (
          <Answer
            answers={[address.code]}
            options={[
              { value: address.code, label: address.name || address.code },
            ]}
            onClick={() => setAddress({ name: '', code: null })}
            capital
          />
        ) : null}
      </Wrapper.Label>
      {!address.code && (
        <>
          <Wrapper.Answers>
            <Input
              name={'address'}
              autoComplete='off'
              value={search}
              onChange={({ value }) => {
                setSearch(value)
                setCode(null)
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
            />
          </Wrapper.Answers>
          <Wrapper.Submit
            disabled={!code}
            fetching={fetching}
            onClick={() => {}}
          >
            Valider
          </Wrapper.Submit>
        </>
      )}
    </Wrapper>
  )
}
