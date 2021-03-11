import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Logo from 'src/components/misc/Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
const StyledLink = styled(Link)``
const StyledLogo = styled(Logo)`
  width: auto;
  height: 2.95rem;
  margin-left: 0.5rem;
  margin-top: 1.8rem;

  ${(props) => props.theme.mq.small} {
    width: auto;
    height: 2.4rem;
  }
`
export default function Logos() {
  const data = useStaticQuery(
    graphql`
      query {
        repusmall: file(relativePath: { eq: "logos/repufrancaise.jpg" }) {
          childImageSharp {
            fixed(height: 50, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        repu: file(relativePath: { eq: "logos/repufrancaise.jpg" }) {
          childImageSharp {
            fixed(height: 90, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <Link to='/'>
        <Large
          fixed={data.repu.childImageSharp.fixed}
          alt='République Française'
        />
      </Link>
      <Link to='/'>
        <Small
          fixed={data.repusmall.childImageSharp.fixed}
          alt='République Française'
        />
      </Link>
      <StyledLink to='/'>
        <StyledLogo link />
      </StyledLink>
    </Wrapper>
  )
}
