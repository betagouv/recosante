import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useUser, useUserMutation } from 'hooks/useUser'
import SearchBar from 'src/components/search/SearchBar'

const Wrapper = styled.div`
  height: 3.5rem;
`
const Email = styled.h2`
  position: relative;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  cursor: pointer;
  word-break: break-all;

  &:before {
    content: 'Éditer';
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 300;
    text-decoration: underline;
  }
`
const SearchBarWrapper = styled.div`
  position: relative;
  width: 22.25rem;
  height: 3rem;
  margin: 0 auto 3rem;
`
const StyledSearchBar = styled(SearchBar)`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transform: none !important;
  font-size: 1.25rem;
`
export default function Address() {
  const { data } = useUser()
  const mutation = useUserMutation()

  const [active, setActive] = useState(false)

  return data ? (
    <Wrapper>
      {active ? (
        <SearchBarWrapper>
          <StyledSearchBar
            initialValue={data.commune && data.commune.nom}
            handlePlaceSelection={(place) => {
              mutation.mutate({ commune: place })
              setActive(false)
            }}
          />
        </SearchBarWrapper>
      ) : (
        <Email onClick={() => setActive(true)}>
          {data.commune && data.commune.nom} (
          {data.commune && data.commune.departement.nom})
        </Email>
      )}
    </Wrapper>
  ) : null
}
