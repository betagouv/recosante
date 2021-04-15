import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Logo from 'src/components/misc/Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  ${(props) => props.theme.mq.small} {
    align-items: center;
  }
`
const Small = styled(Img)`
  display: none !important;
  ${(props) => props.theme.mq.small} {
    display: block !important;
  }
`
const Large = styled(Img)`
  display: block !important;
  ${(props) => props.theme.mq.small} {
    display: none !important;
  }
`
const StyledLink = styled.a``
const StyledLogo = styled(Logo)`
  width: auto;
  height: 2.95rem;
  margin-left: 0.5rem;
  margin-top: 1.8rem;

  ${(props) => props.theme.mq.small} {
    width: auto;
    height: 2.4rem;
    margin-top: 0;
  }
`
export default function Logos() {
  const data = useStaticQuery(
    graphql`
      query {
        repusmall: file(relativePath: { eq: "logos/repufrancaise.jpg" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        repu: file(relativePath: { eq: "logos/repufrancaise.jpg" }) {
          childImageSharp {
            fixed(height: 90) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <a href='/'>
        <Large
          fixed={data.repu.childImageSharp.fixed}
          alt='République Française'
        />
      </a>
      <a href='/'>
        <Small
          fixed={data.repusmall.childImageSharp.fixed}
          alt='République Française'
        />
      </a>
      <StyledLink href='/'>
        <StyledLogo link />
      </StyledLink>
    </Wrapper>
  )
}
