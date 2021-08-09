import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import Share from './recommandationList/Share'
import Acquisition from './recommandationList/Acquisition'

const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.tile};

  ${(props) => props.theme.mq.medium} {
    padding: 0;
    background-color: transparent;
  }
`
const Title = styled.h2``
const Text = styled.p`
  margin-bottom: 3rem;
  font-size: 1.125rem;
`
export default function RecommandationList() {
  const [current] = useQueryParam('step')
  return current === 'end' ? (
    <Wrapper>
      <Title>Votre profil est créé !</Title>
      <Text>
        Vous recevrez maintenant nos recommandations personnalisées et les
        indicateurs environnementaux liés à votre localisation.
      </Text>
      <Share />
      <Acquisition />
    </Wrapper>
  ) : null
}
