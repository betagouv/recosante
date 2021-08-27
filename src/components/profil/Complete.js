import React from 'react'
import styled from 'styled-components'

import { useCompleteSubscription } from 'src/utils/api'
import Alert from 'src/components/base/Alert'
import Section from 'src/components/base/Section'
import Mockup from 'src/components/newsletter/Mockup'
import Share from 'src/components/profil/complete/Share'

const StyledSection = styled(Section)`
  display: flex;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 41.75rem;
  margin-right: 2rem;

  ${(props) => props.theme.mq.medium} {
    width: auto;
    margin: 0 0 2rem;
  }
  ${(props) => props.theme.mq.small} {
    margin: 0 0 1rem;
  }

  h1 {
    ${(props) => props.theme.mq.small} {
      font-size: 1.5rem;
    }
  }
  p {
    max-width: 35.5rem;
    margin-bottom: 1em;
    font-size: 1.25rem;

    ${(props) => props.theme.mq.medium} {
      max-width: none;
    }

    ${(props) => props.theme.mq.small} {
      font-size: 1rem;
    }
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;

  ${(props) => props.theme.mq.medium} {
    min-height: 40rem;
    overflow: hidden;
    margin: -3rem 0;
  }
  ${(props) => props.theme.mq.small} {
    min-height: 100vw;
    overflow: hidden;
    margin: -10vw 0;
  }
`
export default function Complete(props) {
  const { data } = useCompleteSubscription()
  console.log(data)
  return (
    <StyledSection first>
      <Content>
        <h1>
          Félicitation vous êtes maintenant inscrit à <strong>Recosanté</strong>{' '}
          !
        </h1>
        <p>
          Vous recevrez maintenant nos{' '}
          <strong>recommandations personnalisées</strong> et les{' '}
          <strong>indicateurs environnementaux</strong> liés à votre
          localisation.
        </p>
        {data && data.result !== 'ok' && (
          <Alert error>Une erreur est survenue :(</Alert>
        )}
        <Share />
      </Content>
      <MockupWrapper>
        <Mockup isOnScreen={true} />
      </MockupWrapper>
    </StyledSection>
  )
}
