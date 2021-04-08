import React, { useEffect } from 'react'
import styled from 'styled-components'
import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: blue;
`
export default function Index() {
  useEffect(() => {
    setTimeout(window.FB.XFBML.parse(), 1000)
  }, [])
  return (
    <Web title={'Mentions Légales'}>
      <Section>
        Link =<Wrapper className='fb-send-to-messenger'>Test</Wrapper>
        <div
          className='fb-like'
          data-share='true'
          data-width='450'
          data-show-faces='true'
        ></div>
        <a href='fb-messenger://share?link=http://recosante.beta.gouv.fr/'>
          Another Link
        </a>
      </Section>
    </Web>
  )
}
