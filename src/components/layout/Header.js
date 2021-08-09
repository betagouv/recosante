import React from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import Logos from './header/Logos'
import SearchBar from 'src/components/misc/SearchBar'

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 1rem;
  z-index: 1000;
  background: rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);

  ${(props) => props.theme.mq.medium} {
    position: absolute;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
`
const SearchWrapper = styled.div`
  position: relative;
`
const StyledSearchBar = styled(SearchBar)`
  top: -1rem;
  left: auto;
  right: 0;
  font-size: 1rem;
`
export default function Header() {
  const location = useLocation()

  return (
    <Wrapper>
      <Content>
        <Logos />
        <SearchWrapper>
          {location.pathname !== '/' && (
            <StyledSearchBar placeholder='Entrez une ville' />
          )}
        </SearchWrapper>
      </Content>
    </Wrapper>
  )
}
