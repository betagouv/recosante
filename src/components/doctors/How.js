import React, { useRef } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import Section from 'src/components/base/Section'
import Block from 'src/components/misc/Block'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 3rem;
  }
`
const StyledBlock = styled(Block)`
  width: 30.25rem;
  margin: 0 0 0 -17.75rem;
  font-size: 1.125rem;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1200ms;
`
const StyledImg = styled.div`
  width: 49rem;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
    margin-bottom: 2rem;
  }
`
export default function How() {
  const data = useStaticQuery(
    graphql`
      query {
        content: mdx(slug: { eq: "medecins-comment" }) {
          body
        }
      }
    `
  )

  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px', 0)

  return (
    <StyledSection>
      <StyledBlock ref={ref} isOnScreen={isOnScreen}>
        <MDXRenderer>{data.content.body}</MDXRenderer>
      </StyledBlock>
      <StyledImg>
        <StaticImage src={'./how/medecins-comment.jpg'} alt='Comment' />
      </StyledImg>
    </StyledSection>
  )
}
