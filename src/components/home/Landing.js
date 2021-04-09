import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/layout/Section'
import SubscribeForm from './landing/SubscribeForm'
import { sendEvent, setUserProperties } from 'src/utils/lumiere'
import queryString from 'query-string'

const StyledSection = styled(Section)`
  h1 {
    font-size: ${(props) => (props.main ? '2.9375rem' : '2.25rem')};

    span {
      font-weight: 800;
    }

    ${(props) => props.theme.mq.medium} {
      font-size: 2.18rem;
    }
    ${(props) => props.theme.mq.small} {
      font-size: 1.73rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.335rem;
    text-align: justify;

    &:nth-child(2) {
      font-size: 1.43rem;
    }

    ${(props) => props.theme.mq.medium} {
      font-size: 1.25rem;
      text-align: left;

      &:nth-child(2) {
        font-size: 1.25rem;
      }
    }

    ${(props) => props.theme.mq.small} {
      font-size: 1rem;

      &:nth-child(2) {
        font-size: 1rem;
      }
    }
  }
`
const Title = styled.h1`
  margin: 0 -0.5rem 3rem;
  text-align: center;
`
const Line1 = styled.span`
  display: block;
  ${(props) => props.theme.mq.small} {
    font-size: 5.4vw;
  }
`
const Line2 = styled.span`
  display: block;
  font-size: 4.12rem;
  ${(props) => props.theme.mq.medium} {
    font-size: 3.07rem;
  }
  ${(props) => props.theme.mq.small} {
    font-size: 7.6vw;
  }
`
const Line3 = styled.span`
  display: block;
  font-size: 6.12rem;
  ${(props) => props.theme.mq.medium} {
    font-size: 4.55rem;
  }
  ${(props) => props.theme.mq.small} {
    font-size: 11.33vw;
  }
`
export default function Landing(props) {
  useEffect(() => {
    setUserProperties({ qs: queryString.parse(window.location.search) })
    sendEvent(['landing', 'open'])
  }, [props])

  return (
    <StyledSection main={props.main}>
      {props.main && (
        <Title>
          <Line1>
            Une <strong>recommandation quotidienne</strong>
          </Line1>
          <Line2>pour vous protéger de la</Line2>
          <Line3>
            <strong>pollution de l’air</strong>
          </Line3>
        </Title>
      )}
      <MDXRenderer>{props.content}</MDXRenderer>
      <SubscribeForm />
    </StyledSection>
  )
}
