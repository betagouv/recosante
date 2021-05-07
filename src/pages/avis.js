import React, { useEffect } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'

import api from 'src/utils/api'
import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import TextArea from 'src/components/base/TextArea'

const Text = styled.p`
  font-size: 1.25rem;
`
export default function Index(props) {
  useEffect(() => {
    const avis = queryString.parse(window.location.search).avis
    const short_id = queryString.parse(window.location.search).short_id
    if (avis && short_id) {
      api.post(`/newsletter/${short_id}/avis/?appliquee=${avis}/`)
    }
  }, [])
  return (
    <Web title={'Je donne mon avis'}>
      <Section small>
        <Section.Title>
          Votre avis a bien été
          <br />
          pris en compte
        </Section.Title>
        <Text>
          Merci pour votre contribution ! C'est grâce à vos retours que nous
          construisons un service utile !
        </Text>
        <TextArea label='Aidez-nous à comprendre pourquoi vous n’allez pas appliquer cette recommandation en écrivant quelques mots' />
      </Section>
    </Web>
  )
}
