import React, { useRef } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import Section from 'src/components/layout/Section'
import Block from 'src/components/misc/Block'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 3rem;
  }
`
const StyledBlock = styled(Block)`
  ${(props) => (props.index === 1 ? 'margin-top' : 'margin-bottom')}: 2.5rem;
  align-self: ${(props) => (props.index === 1 ? 'flex-start' : 'flex-end')};
  font-size: 1.125rem;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1200ms;
`
const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36.5rem;
  height: 100%;

  ${(props) => props.theme.mq.medium} {
    position: relative !important;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    height: 25rem;
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.mq.small} {
    height: 70vw;
  }
`
export default function Why() {
  const data = useStaticQuery(
    graphql`
      query {
        first: mdx(slug: { eq: "medecins-naissance" }) {
          body
        }
        second: mdx(slug: { eq: "medecins-naissance-2" }) {
          body
        }
        image: file(relativePath: { eq: "medecins-naissance.jpg" }) {
          childrenImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const ref1 = useRef()
  const isOnScreen1 = useOnScreen(ref1, '-100px', 0)

  const ref2 = useRef()
  const isOnScreen2 = useOnScreen(ref2, '-100px', 0)

  return (
    <StyledSection>
      <StyledBlock index={1} ref={ref1} isOnScreen={isOnScreen1}>
        <MDXRenderer>{data.first.body}</MDXRenderer>
      </StyledBlock>
      <StyledImg
        imgStyle={{ objectFit: 'cover' }}
        fluid={data.image.childrenImageSharp[0].fluid}
      />
      <StyledBlock index={2} ref={ref2} isOnScreen={isOnScreen2}>
        <MDXRenderer>{data.second.body}</MDXRenderer>
      </StyledBlock>
    </StyledSection>
  )
}
