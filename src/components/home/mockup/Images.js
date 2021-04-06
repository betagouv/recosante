import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: -10.5rem;
  left: calc(50% + 16.25rem);
  transform: translateX(-50%);
  width: 73.5625rem;

  ${(props) => props.theme.mq.medium} {
    top: -7rem;
    left: calc(50% + 12rem);
    width: 50rem;
  }
  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
const Background = styled(Img)`
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '3rem')});
  transition: transform 800ms ease-out, opacity 800ms;
`
const Tablet = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '6rem')});
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: transform 800ms ease-out, opacity 800ms;
`
const Mobile = styled(Img)`
  display: none;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mq.small} {
    display: block;
    width: 100%;
  }
`
export default function Mockup(props) {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "background.jpg" }) {
          childrenImageSharp {
            fluid(maxWidth: 1177, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        tablet: file(relativePath: { eq: "tablet.png" }) {
          childrenImageSharp {
            fluid(maxWidth: 1177, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        mobile: file(relativePath: { eq: "mobile.png" }) {
          childrenImageSharp {
            fluid(maxWidth: 400, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Wrapper>
        <Background
          isOnScreen={props.isOnScreen}
          fluid={data.background.childrenImageSharp[0].fluid}
          alt='Ombre'
        />
        <Tablet
          isOnScreen={props.isOnScreen}
          fluid={data.tablet.childrenImageSharp[0].fluid}
          alt='Tablette'
        />
      </Wrapper>
      <Mobile fluid={data.mobile.childrenImageSharp[0].fluid} alt='Tablette' />
    </>
  )
}
