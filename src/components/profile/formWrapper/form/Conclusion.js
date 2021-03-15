import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`
const Title = styled.h2``
const Text = styled.p``
const Color = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
`
const StyledButton = styled(Button)`
  align-self: center;
`
export default function Conclusion(props) {
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
      <StyledButton onClick={() => props.setComplete(false)} hollow>
        Modifier mon profil
      </StyledButton>
    </Wrapper>
  )
}
