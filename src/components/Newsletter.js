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
`
const Content = styled.div`
  width: 41.75rem;
  margin-right: 2rem;

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  p {
    max-width: 35.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;
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
      <StyledSection first={props.first}>
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
