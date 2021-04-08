import React, { useEffect } from 'react'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

export default function Index() {
  useEffect(() => {
    setTimeout(window.FB.XFBML.parse(), 1000)
  }, [])
  return (
    <Web title={'Mentions Légales'}>
      <Section>
        Link =
        <div
          className='fb-send-to-messenger'
          messenger_app_id='537843153878579'
          page_id='100297338851041'
        >
          Test
        </div>
      </Section>
    </Web>
  )
}
