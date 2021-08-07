import React, { useRef } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import Section from 'src/components/base/Section'
import SubscribeForm from 'src/components/misc/SubscribeForm'
import Mockup from './newsletter/Mockup'
import Notifications from './newsletter/Notifications'

const StyledSection = styled(Section)`
  display: flex;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 41.75rem;
  margin-right: 2rem;

  ${(props) => props.theme.mq.medium} {
    width: auto;
    margin: 0 0 2rem;
  }
  ${(props) => props.theme.mq.medium} {
    margin: 0 0 1rem;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 4rem;

    ${(props) => props.theme.mq.small} {
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }
  }
  p {
    max-width: 35.5rem;
    font-size: 1.25rem;

    ${(props) => props.theme.mq.medium} {
      max-width: none;
    }

    ${(props) => props.theme.mq.small} {
      font-size: 1rem;
    }
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;

  ${(props) => props.theme.mq.medium} {
    min-height: 40rem;
    overflow: hidden;
    margin: -3rem 0;
  }
  ${(props) => props.theme.mq.medium} {
    min-height: 100vw;
    overflow: hidden;
    margin: -10vw 0;
  }
`
export default function Newsletter(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction" }) {
          body
        }
      }
    `
  )

  const ref = useRef()

  const isOnScreen = useOnScreen(ref, '0px', 0.7)

  return (
    <>
      <StyledSection first={props.first} id='newsletter'>
        <Content ref={ref}>
          <MDXRenderer>{(props.data || data).mdx.body}</MDXRenderer>
          <SubscribeForm />
        </Content>
        <MockupWrapper>
          <Mockup isOnScreen={isOnScreen} />
        </MockupWrapper>
      </StyledSection>
      <Notifications />
    </>
  )
}
