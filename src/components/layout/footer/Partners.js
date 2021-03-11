import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div``
const Title = styled.h4`
  margin-bottom: 1rem;

  ${(props) => props.theme.mq.small} {
    text-align: center;
  }
`
const Logos = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -1rem;

  ${(props) => props.theme.mq.small} {
    justify-content: center;
  }
`
const StyledImg = styled(Img)`
  margin: 0 1rem;
`
export default function Partners() {
  const data = useStaticQuery(
    graphql`
      query {
        atmo: file(relativePath: { eq: "logos/atmo-france.png" }) {
          childImageSharp {
            fixed(width: 70, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        rnsa: file(relativePath: { eq: "logos/logo-rnsa.png" }) {
          childImageSharp {
            fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        srf: file(relativePath: { eq: "logos/logo-srf.jpg" }) {
          childImageSharp {
            fixed(width: 90, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        pollinariums: file(relativePath: { eq: "logos/pollinariums.png" }) {
          childImageSharp {
            fixed(width: 75, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <Title>Ils nous accompagnent</Title>
      <Logos>
        <StyledImg fixed={data.atmo.childImageSharp.fixed} alt='Atmo' />
        <StyledImg fixed={data.rnsa.childImageSharp.fixed} alt='RNSA' />
        <StyledImg fixed={data.srf.childImageSharp.fixed} alt='SRF' />
        <StyledImg
          fixed={data.pollinariums.childImageSharp.fixed}
          alt='Pollinariums'
        />
      </Logos>
    </Wrapper>
  )
}
