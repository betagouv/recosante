import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Form from 'src/components/referral/Form'

const StyledSection = styled(Section)`
  font-size: 1.125rem;
`
export default function InscriptionPatients() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "inscription-patients" }) {
          body
        }
      }
    `
  )

  return (
    <Web title={'Recommander Recosanté'}>
      <StyledSection small>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Form />
      </StyledSection>
    </Web>
  )
}
