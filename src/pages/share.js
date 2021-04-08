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
        Link =
        <Wrapper
          className='fb-send-to-messenger'
          messenger_app_id='537843153878579'
          page_id='100297338851041'
        >
          Test
        </Wrapper>
      </Section>
    </Web>
  )
}
