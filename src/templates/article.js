import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Web from 'components/layout/Web'
import Section from 'components/base/Section'
import useIframe from 'hooks/useIframe'
import Search from 'components/Search'
import Newsletter from 'components/Newsletter'
import Data from 'components/Data'
import About from 'components/About'

const Title = styled.h1`
  color: ${(props) => props.theme.colors.main};
  font-size: 3.25rem;
  margin: 2rem 0;
`
const Category = styled.span`
  color: #fff;
  background-color: ${(props) => props.theme.colors.main};
  padding: 0.5rem 1rem;
`
const FeatureImage = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 4rem;
`

export default function Article(props) {
  const iframe = useIframe()
  return (
    <Web title={props.data.mdx.frontmatter.title}>
      <Section first medium>
        {props.data.mdx.frontmatter.category &&
          <Category
            dangerouslySetInnerHTML={{
              __html: props.data.mdx.frontmatter.category,
            }}/>
        }
        <Title
          dangerouslySetInnerHTML={{
            __html: props.data.mdx.frontmatter.title,
          }}
        />
        {props.data.mdx.frontmatter.image &&
          <FeatureImage image={getImage(props.data.mdx.frontmatter.image)} alt={props.data.mdx.frontmatter.title} />
        }
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
      {!iframe && (
        <>
          <Search />
          <Newsletter />
          <Data />
          <About />
        </>
      )}
    </Web>
  )
}

export const articleQuery = graphql`
  query article($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        category
        image {
          childImageSharp {
            gatsbyImageData(width: 768)
          }
        }
      }
    }
  }
`
