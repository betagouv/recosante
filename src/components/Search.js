import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import Section from 'src/components/base/Section'
import Background from 'src/components/misc/Background'
import SearchBar from 'src/components/misc/SearchBar'
import Suggestions from './search/Suggestions'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 10rem;
  padding: 10.75rem 0 6.5rem;

  ${(props) => props.theme.mq.medium} {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  ${(props) => props.theme.mq.medium} {
    margin-bottom: 5rem;
  }
`
const StyledSection = styled(Section)`
  position: relative;
  margin: 0 auto;
`
const MainTitle = styled.h1``
const Title = styled.h2`
  font-size: 4rem;
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
      <StyledSection xlarge>
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
            handlePlaceSelection={(place) => {
              navigate(
                `/place/${place.code}/${place.nom
                  .toLowerCase()
                  .replace(' ', '-')
                  .replace(`'`, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')}/`
              )
            }}
          />
        </SearchBarSizer>
        <Suggestions />
      </StyledSection>
    </Wrapper>
  )
}
