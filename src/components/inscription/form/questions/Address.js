import React from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import { useProfile, useProfileMutation } from 'src/utils/api'
import SearchBar from 'src/components/misc/SearchBar'
const Wrapper = styled.div`
  position: relative;
`
const SearchWrapper = styled.div`
  position: relative;
  height: 5rem;
`
const StyledSearchBar = styled(SearchBar)`
  font-size: 1rem;
`
export default function Address() {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)
  return data ? (
    <Wrapper>
      {data.ville_nom} ({data.ville_codes_postaux[0]})
      <SearchWrapper>
        <StyledSearchBar
          handlePlaceSelection={(place) =>
            mutation.mutate({ ville_insee: place.code })
          }
        />
      </SearchWrapper>
    </Wrapper>
  ) : null
}
