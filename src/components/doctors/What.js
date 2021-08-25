import React, { useRef } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import Section from 'src/components/base/Section'
import Button from 'src/components/base/Button'
import Mockup from 'src/components/newsletter/Mockup'

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
  ${(props) => props.theme.mq.small} {
    margin: 0 0 1rem;
  }

  h1 {
    font-size: 3rem;
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
  ${(props) => props.theme.mq.small} {
    min-height: 100vw;
    overflow: hidden;
    margin: -10vw 0;
  }
`
export default function What(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "medecins-introduction" }) {
          body
        }
      }
    `
  )

  const ref = useRef()

  const isOnScreen = useOnScreen(ref, '0px', 0.7)

  return (
    <StyledSection first>
      <Content ref={ref}>
        <MDXRenderer>{(props.data || data).mdx.body}</MDXRenderer>
        <Button.Wrapper right>
          <Button
            hollow
            to='https://www.vyte.in/recosante/rendez-vous-professionnelsante'
            onClick={() =>
              window._paq &&
              window._paq.push([
                'trackEvent',
                'Doctors',
                'Navigate',
                'Appointment',
              ])
            }
          >
            Prendre rendez-vous
          </Button>
          <Button
            to='/'
            onClick={() =>
              window._paq &&
              window._paq.push([
                'trackEvent',
                'Doctors',
                'Navigate',
                'Appointment',
              ])
            }
          >
            Tester Recosanté
          </Button>
        </Button.Wrapper>
      </Content>
      <MockupWrapper>
        <Mockup isOnScreen={isOnScreen} />
      </MockupWrapper>
    </StyledSection>
  )
}
