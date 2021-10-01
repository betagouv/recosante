import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import formatPlaceUrl from 'src/utils/formatPlaceUrl'
import Section from 'src/components/base/Section'
import Background from 'src/components/misc/Background'
import Title from 'src/components/search/Title'
import Cloud from 'src/components/search/Cloud'
import SearchBar from 'src/components/search/SearchBar'
import Suggestions from './search/Suggestions'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 10rem;
  padding: 0 0 6.5rem;

  ${(props) => props.theme.mq.medium} {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  ${(props) => props.theme.mq.small} {
    margin-bottom: 5rem;
  }
`
const StyledSection = styled(Section)`
  position: relative;
  margin: 0 auto;

  ${(props) => props.theme.mq.medium} {
    padding: 0;
  }
`
const SearchBarSizer = styled.div`
  position: relative;
  height: 4.5rem;
  margin-bottom: 2.5rem;
`
export default function Search(props) {
  return (
    <Wrapper>
      <Background />

      <StyledSection first>
        <Cloud />
        <Title />
        <SearchBarSizer>
          <SearchBar
            handlePlaceSelection={
              props.handlePlaceSelection ||
              ((place) => {
                navigate(formatPlaceUrl(place))
              })
            }
          />
        </SearchBarSizer>
        <Suggestions />
      </StyledSection>
    </Wrapper>
  )
}
