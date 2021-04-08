import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

export default function Index(props) {
  useEffect(() => {
    window.FB.XFBML.parse()
  }, [])
  return (
    <Web title={'Mentions Légales'}>
      <Section>
        <div
          className='fb-send-to-messenger'
          messenger_app_id='537843153878579'
          page_id='863084903754981'
        >
          lol
        </div>
        <a
          href='https://www.facebook.com/dialog/share?
    app_id=537843153878579
    &href=https://recosante.beta.gouv.fr
    &redirect_uri=https://recosante.beta.gouv.fr'
        >
          TEST
        </a>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query terms {
    mdx(slug: { eq: "mentions-legales" }) {
      body
    }
  }
`
