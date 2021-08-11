import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import AnimateHeight from 'react-animate-height'

import SubscribeForm from 'src/components/misc/SubscribeForm'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${(props) => props.theme.mq.medium} {
    align-items: center;
  }
`
const ButtonMore = styled.button`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`
const Introduction = styled.p`
  font-weight: 300;
  margin-bottom: 1em;
`
const Text = styled.div`
  margin-bottom: 2rem;
  font-weight: 300;
  border-bottom: 1px solid ${(props) => props.theme.colors.input};
`
const LearnMore = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.75rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`
export default function Recommandation(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction" }) {
          body
        }
      }
    `
  )

  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Introduction>{props.intro}</Introduction>
      {props.children && (
        <>
          <AnimateHeight duration={300} height={open ? 'auto' : 0}>
            <Text>{props.children}</Text>
            <LearnMore>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
              <SubscribeForm dashboard />
            </LearnMore>
          </AnimateHeight>
          <AnimateHeight duration={300} height={open ? 0 : 'auto'}>
            <ButtonMore onClick={() => setOpen((prevOpen) => !prevOpen)}>
              Afficher la suite
            </ButtonMore>
          </AnimateHeight>
        </>
      )}
    </Wrapper>
  )
}
