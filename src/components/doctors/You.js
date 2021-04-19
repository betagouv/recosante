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

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 3rem;
  }
`
const StyledBlock = styled(Block)`
  width: 30.25rem;
  margin: 0 -17.75rem 0 0;
  font-size: 1.125rem;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1200ms;

  ul {
    margin: 0 1rem;
    padding: 0;
    max-width: 23.5rem;
}
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
      top: 50%;
      left: 0.5rem;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490.05 490.05" style="enable-background:new 0 0 490.05 490.05;" xml:space="preserve"><path fill="%23000091" d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275    z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"/></svg>');
      background-size: 2rem;
      opacity: ${(props) => (props.animationIsOnScreen ? 1 : 0)};
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

  ${(props) => props.theme.mq.medium} {
    width: 100%;
    margin-bottom: 2rem;
  }
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
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px', 0)
  const animationIsOnScreen = useOnScreen(ref)

  return (
    <StyledSection large>
      <StyledBlock
        ref={ref}
        isOnScreen={isOnScreen}
        animationIsOnScreen={animationIsOnScreen}
      >
        <MDXRenderer>{data.content.body}</MDXRenderer>
        <Button.Wrapper>
          <Button to='https://www.vyte.in/recosante/rendez-vous-professionnelsante'>
            Prendre rendez-vous
          </Button>
        </Button.Wrapper>
      </StyledBlock>
      <StyledImg fluid={data.image.childrenImageSharp[0].fluid} />
    </StyledSection>
  )
}
