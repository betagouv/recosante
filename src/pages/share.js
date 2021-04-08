import React, { useEffect } from 'react'

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
          Test
        </div>
      </Section>
    </Web>
  )
}
