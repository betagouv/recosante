import React from 'react'

import Web from 'src/components/layout/Web'
import Section from 'src/components/base/Section'
import Form from 'src/components/inscription/Form'

export default function Profile(props) {
  return (
    <Web title={'Profil'}>
      <Section first>
        <Form />
      </Section>
    </Web>
  )
}
