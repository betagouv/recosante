import React, { useEffect } from 'react'
import styled from 'styled-components'

import { sendEvent } from 'src/utils/lumiere'
import Button from 'src/components/base/Button'
import Step from './Step'
import Share from './conclusion/Share'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`
const Title = styled.h2``
const Text = styled.p`
  margin-bottom: 3rem;
`
const Color = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
`
const StyledButton = styled(Button)`
  align-self: center;
  margin-bottom: 1.5rem;
`
export default function Conclusion(props) {
  useEffect(() => {
    sendEvent(['inscription', 'open_step', { step: 'connaissance_produit' }])
  }, [])
  return (
    <Wrapper>
      <Title
        dangerouslySetInnerHTML={{
          __html: 'Votre profil est créé&#8239;!',
        }}
      />
      <Text>
        Vous recevrez maintenant chaque jour votre{' '}
        <Color>recommandation personnalisée</Color> et les{' '}
        <Color>indicateurs environnementaux</Color> liés à votre localisation.
      </Text>
      <Share />
      <StyledButton onClick={() => props.setComplete(false)} hollow>
        Modifier mon profil
      </StyledButton>
      <Step
        step={{
          index: 7,
          name: 'connaissance_produit',
          options: [
            {
              value: 'medecin',
              label: `Par le biais de mon médecin`,
            },
            {
              value: 'association',
              label: 'Par une association',
            },
            {
              value: 'reseaux_sociaux',
              label: `Via les réseaux sociaux`,
            },
            {
              value: 'publicite',
              label: 'Par la publicité',
            },
            {
              value: 'ami',
              label: 'Grâce à un·e proche',
            },
            {
              value: 'autrement',
              label: `Autrement`,
            },
          ],
          label: [`J’ai connu Recosanté `, `J’ai connu Recosanté `],
          active: true,
        }}
        last={false}
      />
    </Wrapper>
  )
}
