import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import { useProfile, useProfileMutation } from 'src/utils/api'
import Wrapper from './question/Wrapper'
import Value from './question/Value'
import Submit from './question/Submit'
import SearchBar from 'src/components/search/SearchBar'

const SearchBarWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 100%;
  margin: 2rem 0 1rem;
`
const StyledSearchBar = styled(SearchBar)`
  width: 100%;
  font-size: 1.5rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
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
    setSentence(data && data.ville_nom ? data.ville_nom.split('') : [])
  }, [data])

  const isCurrent =
    location && queryString.parse(location.search).step === 'ville_insee'

  return data ? (
    <Wrapper.NoForm visible={answer || isCurrent} isCurrent={isCurrent}>
      <Wrapper.Label>
        J'habite à <Value capital name={'ville_insee'} sentence={sentence} />
      </Wrapper.Label>
      <Wrapper.Response visible={isCurrent}>
        <SearchBarWrapper>
          <StyledSearchBar
            handlePlaceSelection={(place) => setAnswer(place.code)}
          />
        </SearchBarWrapper>
        <Submit onClick={() => mutation.mutate({ ville_insee: answer })} />
      </Wrapper.Response>
    </Wrapper.NoForm>
  ) : null
}
