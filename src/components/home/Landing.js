import React from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'
import SubscribeForm from './landing/SubscribeForm'

const Title = styled.h1`
  font-size: 2.9375rem;

  span {
    font-weight: 800;
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`
const Text = styled.p`
  font-size: 1.375rem;
`
export default function Landing() {
  return (
    <Section>
      <Title>
        Une <Color>recommandation quotidienne</Color> pour vous protéger des
        impacts de la <Color>qualité de l'air</Color>
      </Title>
      <Text>
        <Color>Recosanté</Color> est une{' '}
        <Color>lettre d’information numérique</Color> qui vous aide à vous
        protéger des <Color>impacts de la qualité de l'air</Color> sur votre
        santé.
      </Text>
      <Text>
        Créez votre profil pour recevoir <Color>chaque jour</Color> par{' '}
        <Color>email</Color> une <Color>recommandation personnalisée</Color>{' '}
        selon votre profil et les <Color>indicateurs environnementaux</Color>{' '}
        liés à votre localisation.
      </Text>
      <SubscribeForm />
    </Section>
  )
}
