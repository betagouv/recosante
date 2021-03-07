import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useWindowSize from 'src/hooks/useWindowSize'
import Block from 'src/components/misc/Block'
import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -9.6rem -0.5rem 5.5rem;
  font-size: 1.125rem;
`
const StyledBlock = styled(Block)`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: calc(50% - 5.25rem);
  transform: translateY(-50%);
  width: 42.75rem;
`
const StyledImg = styled(Img)`
  width: calc(50vw + 12rem);
  height: ${(props) => props.windowHeight}px;
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

  return (
    <Wrapper>
      <StyledBlock>
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
