import React from 'react'

import ProfileProvider from 'src/components/providers/ProfileProvider'
import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import FormApi from 'src/components/profile/FormApi'

export default function Profile(props) {
  console.log(props)
  return (
    <ProfileProvider>
      <Web title={'Profil'}>
        <Section tiny>
          <FormApi />
        </Section>
      </Web>
    </ProfileProvider>
  )
}
