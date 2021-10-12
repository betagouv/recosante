import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Button from 'components/base/Button'
import Wrapper from './Wrapper'

const StyledContent = styled(Wrapper.Content)`
  ul {
    margin: 0 1rem;
    padding: 0;
  }

  li {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 3rem;
    font-size: 1.125rem;
    list-style: none;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0.5rem;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490.05 490.05" style="enable-background:new 0 0 490.05 490.05;" xml:space="preserve"><path fill="%23000091" d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275    z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"/></svg>');
      background-size: 2rem;
    }
  }
`
export default function You() {
  const data = useStaticQuery(
    graphql`
      query {
        content: mdx(slug: { eq: "medecins-vous" }) {
          body
        }
      }
    `
  )

  return (
    <Wrapper>
      <StyledContent>
        <MDXRenderer>{data.content.body}</MDXRenderer>
        <Button.Wrapper>
          <Button onClick={() => alert('Kit kit kit')} hollow>
            Télecharger le kit de communication
          </Button>
          <Button to='mailto:contact@recosante.beta.gouv.fr'>
            Prendre rendez-vous
          </Button>
        </Button.Wrapper>
      </StyledContent>
      <Wrapper.Image width='35.5rem'>
        <StaticImage src={'./images/section4.jpg'} alt='Pourquoi' />
      </Wrapper.Image>
    </Wrapper>
  )
}
