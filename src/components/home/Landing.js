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
export default function Landing(props) {
  useEffect(() => {
    setUserProperties({ qs: queryString.parse(window.location.search) })
    sendEvent(['landing', 'open'])
  }, [props])

  return (
    <StyledSection main={props.main}>
      <MDXRenderer>{props.content}</MDXRenderer>
      <SubscribeForm />
    </StyledSection>
  )
}
