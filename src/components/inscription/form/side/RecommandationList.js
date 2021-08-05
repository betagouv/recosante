import React from 'react'
import styled from 'styled-components'

import Share from './recommandationList/Share'
import Acquisition from './recommandationList/Acquisition'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.tile};
  padding: 2rem;
`
const Title = styled.h2``
const Text = styled.p`
  margin-bottom: 3rem;
  font-size: 1.125rem;
`
export default function RecommandationList() {
  return (
    <Wrapper>
      <Title>Votre profil est créé !</Title>
      <Text>
        Vous recevrez maintenant nos recommandations personnalisées et les
        indicateurs environnementaux liés à votre localisation.
      </Text>
      <Share />
      <Acquisition />
    </Wrapper>
  )
}
