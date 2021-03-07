import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/layout/Section'
import Block from 'src/components/misc/Block'
import Button from 'src/components/base/Button'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
const StyledBlock = styled(Block)`
  width: 30.25rem;
  margin: 0 0 0 -17.75rem;
  font-size: 1.125rem;
`
const StyledImg = styled(Img)`
  width: 49rem;
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
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <StyledSection large>
      <StyledBlock>
        <MDXRenderer>{data.content.body}</MDXRenderer>
        <Button.Wrapper>
          <Button hollow>Télecharger le flyer d'inscription</Button>
        </Button.Wrapper>
      </StyledBlock>
      <StyledImg fluid={data.image.childrenImageSharp[0].fluid} />
    </StyledSection>
  )
}
