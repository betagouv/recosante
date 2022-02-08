import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { formatPlaceUrl } from 'utils/formatPlaceUrl'
import Section from 'components/base/Section'
import Background from 'components/misc/Background'
import Title from 'components/search/Title'
import Cloud from 'components/search/Cloud'
import SearchBar from 'components/search/SearchBar'
import Suggestions from './search/Suggestions'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 10rem;
  padding: 0 0 6.5rem;

  ${(props) => props.theme.mq.medium} {
    min-height: ${(props) => (props.iframe ? '50rem' : '100vh')};
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
    <Wrapper iframe={props.iframe}>
      <Background />

      <StyledSection first>
        <Cloud />
        <Title />
        <SearchBarSizer>
          <SearchBar
            handlePlaceSelection={
              props.handlePlaceSelection ||
              ((place) => {
                navigate(formatPlaceUrl(place) + window.location.search)
              })
            }
          />
        </SearchBarSizer>
        <Suggestions />
      </StyledSection>
    </Wrapper>
  )
}
