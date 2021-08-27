import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import formatPlaceUrl from 'src/utils/formatPlaceUrl'
import Section from 'src/components/base/Section'
import Background from 'src/components/misc/Background'
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
const MainTitle = styled.h1`
  ${(props) => props.theme.mq.medium} {
    text-align: center;
  }
`
const Title = styled.h2`
  font-size: 4rem;

  ${(props) => props.theme.mq.medium} {
    text-align: center;
  }

  ${(props) => props.theme.mq.small}  {
    margin-bottom: 1.5rem;
    font-size: 2rem;
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
        {props.main ? (
          <MainTitle>
            Découvrez
            <br />
            la <strong>qualité de l’air</strong>
            <br />
            près de chez vous
          </MainTitle>
        ) : (
          <Title>
            Découvrez
            <br />
            la <strong>qualité de l’air</strong>
            <br />
            près de chez vous
          </Title>
        )}
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
