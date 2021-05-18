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
  flex-direction: row-reverse;
  align-items: center;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 3rem;
  }
`
const StyledBlock = styled(Block)`
  width: 30.25rem;
  margin: 0 0 0 -17.75rem;
  font-size: 1.125rem;
  opacity: ${(props) => (props.isOnScreen ? 1 : 0)};
  transition: opacity 1200ms;
`
const StyledImg = styled(Img)`
  width: 49rem;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
    margin-bottom: 2rem;
  }
`
export default function How() {
  const data = useStaticQuery(
    graphql`
      query {
        content: mdx(slug: { eq: "medecins-comment" }) {
          body
        }
        image: file(relativePath: { eq: "medecins-comment.jpg" }) {
          childrenImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kit: file(
          relativePath: {
            eq: "Recosante_Kit.communication.professionnel.de.sante.zip"
          }
        ) {
          publicURL
        }
      }
    `
  )

  const ref = useRef()
  const isOnScreen = useOnScreen(ref, '-100px', 0)

  return (
    <StyledSection large>
      <StyledBlock ref={ref} isOnScreen={isOnScreen}>
        <MDXRenderer>{data.content.body}</MDXRenderer>
      </StyledBlock>
      <StyledImg fluid={data.image.childrenImageSharp[0].fluid} />
    </StyledSection>
  )
}
