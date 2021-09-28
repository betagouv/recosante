import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: absolute;
  z-index: 1200;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 2.5rem 2rem 1.5rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 2rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 300ms;
`
const Title = styled.h3`
  max-width: 31.5rem;
  margin: 0 auto;
  font-size: 2.5rem;
  text-align: center;
`
const Text = styled.p`
  font-size: 1.25rem;
  text-align: center;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function Error(props) {
  return (
    <Wrapper visible={props.error}>
      {props?.error?.response?.data?.errors?.mail === 'mail already used' ? (
        <>
          <Title>Un compte est déjà associé à cet email</Title>
          <Text>
            Souhaitez vous recevoir un email à cette adresse pour vous permettre
            d'éditer votre compte ?
          </Text>
          <ButtonWrapper>
            <Button onClick={props.reset} hollow>
              Essayer avec une autre adresse
            </Button>
            <Button>Recevoir un email</Button>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Title>Une erreur est survenue :(</Title>
          <Text>
            Vous pouvez réessayer dans quelques minutes. Si le problème
            persiste, n'hésitez pas à nous contacter pour nous le signaler.
          </Text>
          <ButtonWrapper>
            <Button to={'mailto:contact@recosante.beta.gouv.fr'} hollow>
              Nous contacter
            </Button>
            <Button onClick={props.reset}>Réessayer</Button>
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  )
}
