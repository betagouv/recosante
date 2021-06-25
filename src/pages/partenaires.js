import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import MagicLink from 'src/components/base/MagicLink'
import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -0.5rem;
`
const Partner = styled(MagicLink)`
  width: 5.25rem;
  margin: 0.5rem;
`
export default function Partners(props) {
  return (
    <Web title={'Ils parlent de nous'}>
      <Section>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        <Wrapper>
          {props.data.mdx.frontmatter.partners.map((partner) => (
            <Partner to={partner.link}>
              <Img
                fluid={partner.image.childrenImageSharp[0].fluid}
                alt={partner.title}
              />
            </Partner>
          ))}
        </Wrapper>
      </Section>
      <Section>
        <Section.Title>Ils parlent de nous</Section.Title>
        <Wrapper>
          {props.data.mdx.frontmatter.press.map((press) => (
            <Partner to={press.link}>
              <Img
                fluid={press.image.childrenImageSharp[0].fluid}
                alt={press.title}
              />
            </Partner>
          ))}
        </Wrapper>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query partners {
    mdx(slug: { eq: "partenaires" }) {
      body
      frontmatter {
        partners {
          title
          image {
            childrenImageSharp {
              fluid(maxWidth: 84, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
        press {
          title
          image {
            childrenImageSharp {
              fluid(maxWidth: 84, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
