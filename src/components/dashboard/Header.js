import React from 'react'
import styled from 'styled-components'

import EpisodePollution from './header/EpisodePollution'
import Select from 'components/base/FancySelect'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const TitleWrapper = styled.div`
  flex: 1;
  margin-bottom: 5rem;

  ${(props) => props.theme.mq.medium} {
    margin-bottom: 2rem;
  }
`
const Title = styled.h1`
  margin: 0 0 0 -0.15rem;

  ${(props) => props.theme.mq.medium} {
    text-align: center;
  }
`
const Name = styled.span`
  color: ${(props) => props.theme.colors.main};
`
const DateWrapper = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};

  ${(props) => props.theme.mq.medium} {
    display: block;
    margin: 0.2rem 0 0.4rem;
    font-size: 1.25rem;
  }
  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
const Intro = styled.span`
  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Details = styled.div`
  font-size: 1.25rem;
  font-weight: 300;

  ${(props) => props.theme.mq.medium} {
    display: block;
    font-size: 1rem;
    text-align: center;
  }
  ${(props) => props.theme.mq.medium} {
    font-size: 0.875rem;
  }
`
export default function Header(props) {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const formatDateLabel = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }
  const formatDateValue = (date) => {
    return new Intl.DateTimeFormat("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date)
  }
  const options = [
    { value: formatDateValue(today), label: formatDateLabel(today)},
    { value: formatDateValue(tomorrow), label: formatDateLabel(tomorrow)}
  ]
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <Name>{props.place.nom}</Name>
          <DateWrapper>
            <Intro>, le </Intro>
            <Select
              fancy
              value={props.date || options[0].value}
              onChange={(value) => {
                props.onDateChange(value !== options[0].value && value)
                window?._paq?.push(['trackEvent', 'Search', 'DateChange'])
              }}
              options={options}
            />
          </DateWrapper>
        </Title>
        <Details>
          {props.place.codesPostaux.length > 2
            ? props.place.codesPostaux[0] +
              ' ... ' +
              props.place.codesPostaux[props.place.codesPostaux.length - 1]
            : props.place.codesPostaux.join(', ')}{' '}
          - {props.place.departement.nom}
        </Details>
      </TitleWrapper>
      <EpisodePollution place={props.place} date={props.date}/>
    </Wrapper>
  )
}
