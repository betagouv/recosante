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
  justify-content: ${(props) =>
    props.newsletter ? 'center' : 'space-between'};
`
export default function Success(props) {
  const newsletter = props?.data?.data?.recommandations[0] === 'oui'
  return (
    <Wrapper visible={props.data}>
      <Title>
        <strong>Félicitation</strong> !<br /> Vous êtes maintenant abonné aux{' '}
        <strong>indicateurs</strong>{' '}
        {newsletter ? (
          <>
            et aux <strong>recommandations hebdomadaires</strong>
          </>
        ) : (
          <>de votre choix</>
        )}
        .
      </Title>

      <ButtonWrapper newsletter={newsletter}>
        <Button to={`/profil?user=${props?.data?.data?.uid}`} hollow>
          Modifier mes informations
        </Button>
        {!newsletter && (
          <Button to={`/profil?user=${props?.data?.data?.uid}`}>
            M’abonner aux recommandations
          </Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  )
}
