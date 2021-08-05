import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import { useProfile, useProfileMutation } from 'src/utils/api'
import Wrapper from './question/Wrapper'
import Value from './question/Value'
import SearchBar from 'src/components/misc/SearchBar'

const SearchBarWrapper = styled.div`
  position: relative;
  height: 4rem;
  margin-top: 2rem;
`
const StyledSearchBar = styled(SearchBar)`
  font-size: 1rem;
`
export default function Address() {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [answer, setAnswer] = useState()
  useEffect(() => {
    setAnswer(data && data.ville_insee)
  }, [data])

  const [sentence, setSentence] = useState([])
  useEffect(() => {
    setSentence(data ? data.ville_nom.split('') : [])
  }, [data])

  const isCurrent =
    location && queryString.parse(location.search).step === 'ville_insee'

  return data ? (
    <Wrapper.NoForm visible={answer || isCurrent}>
      <Wrapper.Label>
        J'habite à <Value capital name={'ville_insee'} sentence={sentence} />
      </Wrapper.Label>
      <Wrapper.Response visible={isCurrent}>
        <SearchBarWrapper>
          <StyledSearchBar
            handlePlaceSelection={(place) => setAnswer(place.code)}
          />
        </SearchBarWrapper>
        <Wrapper.Submit
          onClick={() => mutation.mutate({ ville_insee: answer })}
        >
          Valider
        </Wrapper.Submit>
      </Wrapper.Response>
    </Wrapper.NoForm>
  ) : null
}
