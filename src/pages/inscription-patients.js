import React, { useState } from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import TextInputWithLabel from 'src/components/base/TextInputWithLabel'

const Form = styled.form``

export default function InscriptionPatients(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  })
  return (
    <Web title={'Recommander Recosanté'}>
      <Section small>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        <Form>
          <TextInputWithLabel
            label='Nom'
            name='nom'
            value={user.name}
            onChange={({ value, name }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
          />
        </Form>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query inscription {
    mdx(slug: { eq: "inscription-patients" }) {
      body
    }
  }
`
