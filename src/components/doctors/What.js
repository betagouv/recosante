import React, { useRef } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import useWindowSize from 'src/hooks/useWindowSize'
import Block from 'src/components/misc/Block'
import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: -9.6rem -0.5rem 5.5rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
    align-items: center;
    margin: 0 0 5.5rem;
  }
`
const StyledBlock = styled(Block)`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: calc(50% - 5.25rem);
  transform: translateY(-50%);
  width: 42.75rem;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1200ms;

  ${(props) => props.theme.mq.medium} {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
  }
`
const StyledImg = styled(Img)`
  width: calc(50vw + 12rem);
  height: ${(props) => props.windowHeight}px;
  min-height: 46vw;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
    height: auto;
    min-height: none;
  }
`
export default function What() {
  const data = useStaticQuery(
    graphql`
      query {
        content: mdx(slug: { eq: "medecins-introduction" }) {
          body
        }
        image: file(relativePath: { eq: "medecins-introduction.jpg" }) {
          childrenImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const { height } = useWindowSize()

  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px', 0)

  return (
    <Wrapper>
      <StyledBlock ref={ref} isOnScreen={isOnScreen}>
        <MDXRenderer>{data.content.body}</MDXRenderer>
        <Button.Wrapper>
          <Button>Prendre rendez-vous</Button>
          <Button hollow>S'inscrire à Recosanté</Button>
        </Button.Wrapper>
      </StyledBlock>
      <StyledImg
        windowHeight={height}
        imgStyle={{ objectFit: 'cover' }}
        fluid={data.image.childrenImageSharp[0].fluid}
      />
    </Wrapper>
  )
}
