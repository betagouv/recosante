import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Section from 'src/components/layout/Section'
import Block from 'src/components/misc/Block'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
`
const StyledBlock = styled(Block)`
  ${(props) => (props.index === 1 ? 'margin-top' : 'margin-bottom')}: 2.5rem;
  align-self: ${(props) => (props.index === 1 ? 'flex-start' : 'flex-end')};

  font-size: 1.125rem;
`
const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36.5rem;
  height: 100%;
`
export default function Why() {
  const data = useStaticQuery(
    graphql`
      query {
        first: mdx(slug: { eq: "medecins-naissance" }) {
          body
        }
        second: mdx(slug: { eq: "medecins-naissance-2" }) {
          body
        }
        image: file(relativePath: { eq: "medecins-naissance.jpg" }) {
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
    <StyledSection>
      <StyledBlock index={1}>
        <MDXRenderer>{data.first.body}</MDXRenderer>
      </StyledBlock>
      <StyledBlock index={2}>
        <MDXRenderer>{data.second.body}</MDXRenderer>
      </StyledBlock>
      <StyledImg
        imgStyle={{ objectFit: 'cover' }}
        fluid={data.image.childrenImageSharp[0].fluid}
      />
    </StyledSection>
  )
}
