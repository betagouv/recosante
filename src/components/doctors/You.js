import React, { useRef } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import Section from 'src/components/layout/Section'
import Block from 'src/components/misc/Block'
import Button from 'src/components/base/Button'

const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
`
const StyledBlock = styled(Block)`
  width: 36.5rem;
  margin: 0 -16.75rem 0 0;
  font-size: 1.125rem;

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 3rem;
    font-size: 1.125rem;
    list-style: none;

    &:before {
      content: '';
      position: absolute;
      top: 0.25rem;
      left: 0.5rem;
      width: 2rem;
      height: 2rem;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"><path fill="%23000091" d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18   C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811   c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166   C41.154,15.239,41.229,16.503,40.495,17.329z"/></svg>');
      background-size: 2rem;
      opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
      transition: opacity 1000ms;
    }

    &:nth-child(2) {
      &:before {
        transition-delay: 300ms;
      }
    }
    &:nth-child(3) {
      &:before {
        transition-delay: 600ms;
      }
    }
  }
`
const StyledImg = styled(Img)`
  width: 49rem;
`
export default function You() {
  const data = useStaticQuery(
    graphql`
      query {
        content: mdx(slug: { eq: "medecins-vous" }) {
          body
        }
        image: file(relativePath: { eq: "medecins-vous.jpg" }) {
          childrenImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const ref = useRef()
  const isOnScreen = useOnScreen(ref)

  return (
    <StyledSection large>
      <StyledBlock ref={ref} isOnScreen={isOnScreen}>
        <MDXRenderer>{data.content.body}</MDXRenderer>
        <Button.Wrapper>
          <Button>Prendre rendez-vous</Button>
        </Button.Wrapper>
      </StyledBlock>
      <StyledImg fluid={data.image.childrenImageSharp[0].fluid} />
    </StyledSection>
  )
}
