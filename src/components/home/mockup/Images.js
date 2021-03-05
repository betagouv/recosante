import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: -10.5rem;
  left: calc(50% - 14.6875rem);
  transform: translateX(-50%);
  width: 73.5625rem;
`
const Background = styled(Img)`
  opacity: ${(props) => (props.onScreen ? 1 : 0)};
  transform: translateY(${(props) => (props.onScreen ? 0 : '3rem')});
  transition: transform 1000ms ease-out, opacity 1000ms;
`
const Tablet = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${(props) => (props.onScreen ? 0 : '6rem')});
  opacity: ${(props) => (props.onScreen ? 1 : 0)};
  transition: transform 1000ms ease-out, opacity 1000ms;
`
export default function Mockup(props) {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "background.jpg" }) {
          childrenImageSharp {
            fluid(maxWidth: 1177, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tablet: file(relativePath: { eq: "tablet.png" }) {
          childrenImageSharp {
            fluid(maxWidth: 1177, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <Background
        onScreen={props.onScreen}
        fluid={data.background.childrenImageSharp[0].fluid}
        alt='Ombre'
      />
      <Tablet
        onScreen={props.onScreen}
        fluid={data.tablet.childrenImageSharp[0].fluid}
        alt='Tablette'
      />
    </Wrapper>
  )
}
