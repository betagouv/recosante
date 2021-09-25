import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useStepPosition from 'src/hooks/useStepPosition'
import { useProfile, useUserMutation } from 'src/utils/api'
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
  const { data } = useProfile()
  const mutation = useUserMutation()

  const [answer, setAnswer] = useState()
  useEffect(() => {
    setAnswer(data && data.ville_insee)
  }, [data])

  const [sentence, setSentence] = useState([])
  useEffect(() => {
    setSentence(data && data.ville_nom ? data.ville_nom.split('') : [])
  }, [data])

  const { setCurrent, isCurrent, isEnd } = useStepPosition('ville_insee')

  return data ? (
    <Wrapper.NoForm
      visible={answer || isCurrent}
      isCurrent={isCurrent}
      isEnd={isEnd}
    >
      <Wrapper.Label onClick={() => setCurrent('ville_insee')}>
        J'habite à <Value capital name={'ville_insee'} sentence={sentence} />
      </Wrapper.Label>
      <Wrapper.Response visible={isCurrent}>
        <SearchBarWrapper>
          <StyledSearchBar
            handlePlaceSelection={(place) => setAnswer(place.code)}
          />
        </SearchBarWrapper>
        <Submit
          onClick={() => mutation.mutate({ ville_insee: answer })}
          fetching={mutation.isLoading}
        />
      </Wrapper.Response>
    </Wrapper.NoForm>
  ) : null
}
