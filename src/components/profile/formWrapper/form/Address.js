import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import api from 'src/utils/api'
import ProfileContext from 'src/utils/ProfileContext'
import useDebounce from 'src/hooks/useDebounce'
import TextInput from 'src/components/base/TextInput'
import Alert from 'src/components/base/Alert'
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
const StyledAlert = styled(Alert)`
  font-size: 1rem;
`
export default function Address(props) {
  const { profile, setProfile, current, edit, setEdit } = useContext(
    ProfileContext
  )

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const [code, setCode] = useState(null)
  const [insee, setInsee] = useState(null)

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

  const [fetching, setFetching] = useState(false)

  const [focus, setFocus] = useState(false)

  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(current === props.step.index - 1 || edit === props.step.index - 1)
  }, [profile, props.step, current, edit])

  const [available, setAvailable] = useState(true)
  useEffect(() => {
    insee &&
      api
        .fetch(`/city-availability?insee=${insee}`)
        .then((res) => setAvailable(res.availability))
  }, [insee])

  return (
    <Wrapper
      className={props.className}
      mounted={true}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()

        if (insee && available) {
          window._paq &&
            window._paq.push([
              'trackEvent',
              'Subscription',
              'Submit',
              props.step.name,
            ])

          setFetching(true)
          setProfile({
            [props.step.name]: insee,
          }).then(() => setFetching(false))
        }
      }}
    >
      <Wrapper.Label htmlFor={'address'}>
        J'habite à{' '}
        {!active ? (
          <Answer
            answers={[profile[props.step.name]]}
            options={[
              {
                value: profile[props.step.name],
                label: profile.ville_nom || profile[props.step.name],
              },
            ]}
            onClick={() => {
              window._paq &&
                window._paq.push([
                  'trackEvent',
                  'Subscription',
                  'Edit',
                  props.step.name,
                ])
              setEdit(props.step.index - 1)
            }}
            capital
          />
        ) : null}
      </Wrapper.Label>
      {active && (
        <>
          <Wrapper.Answers>
            <Input
              name={'address'}
              autoComplete='off'
              value={search}
              onChange={({ value }) => {
                setSearch(value)
                setCode(null)
                setInsee(null)
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
              setInsee={setInsee}
            />
          </Wrapper.Answers>
          <Wrapper.Submit
            disabled={!insee || !available}
            fetching={fetching}
            onClick={() => {}}
          >
            Valider
          </Wrapper.Submit>
          {!available && (
            <StyledAlert error>
              Malheureusement Recosanté n'est pas encore disponible pour ce lieu
              :(
            </StyledAlert>
          )}
        </>
      )}
    </Wrapper>
  )
}
