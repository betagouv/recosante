import React, { useRef } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useOnScreen from 'src/hooks/useOnScreen'
import Block from 'src/components/misc/Block'
import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: -9.6rem -0.5rem 5.5rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 0 2.5rem;
    font-size: 1rem;
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
`
const StyledImg = styled(Img)`
  width: calc(50vw + 12rem);
  height: 100vh;
  min-height: 46vw;

  ${(props) => props.theme.mq.medium} {
    width: 36.5rem;
    height: 30rem;
    margin-bottom: 2rem;
    min-height: auto;
  }

  ${(props) => props.theme.mq.small} {
    display: none;
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

  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px', 0)

  return (
    <Wrapper>
      <StyledBlock ref={ref} isOnScreen={isOnScreen}>
        <MDXRenderer>{data.content.body}</MDXRenderer>
        <Button.Wrapper>
          <Button
            to='https://www.vyte.in/recosante/rendez-vous-medecin'
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
            hollow
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
            S'inscrire à Recosanté
          </Button>
        </Button.Wrapper>
      </StyledBlock>
      <StyledImg
        imgStyle={{ objectFit: 'cover' }}
        fluid={data.image.childrenImageSharp[0].fluid}
      />
    </Wrapper>
  )
}
