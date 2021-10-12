import React, { useState } from 'react'
import styled from 'styled-components'
import IframeResizer from 'iframe-resizer-react'

import useWindowSize from 'hooks/useWindowSize'
import Section from 'components/base/Section'
import Code from 'components/widget/Code'
import Options from 'components/widget/Options'

const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
    align-items: center;
  }
`
const Configurator = styled.div`
  max-width: 25rem;
  margin-top: 2rem;

  ${(props) => props.theme.mq.medium} {
    margin-top: 0;
  }
`
const MainTitle = styled.h1`
  width: 29.25rem;

  ${(props) => props.theme.mq.medium} {
    width: auto;
  }
`
const Title = styled.h2`
  width: 29.25rem;

  ${(props) => props.theme.mq.medium} {
    width: auto;
  }
`
const StyledIframe = styled(IframeResizer)`
  display: block;
  width: 36rem;
  border: none;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
  }
`

export default function Widget(props) {
  const [size, setSize] = useState(16)
  const [insee, setInsee] = useState(null)

  const url = 'https://app.recosante.beta.gouv.fr'

  const { width } = useWindowSize()

  return !props.home || width > 700 ? (
    <StyledSection first={props.main}>
      <Configurator>
        {props.main ? (
          <MainTitle>
            Intégrez <strong>Recosanté</strong>
            <br /> sur votre site
          </MainTitle>
        ) : (
          <Title large>
            Intégrez <strong>Recosanté</strong>
            <br /> sur votre site
          </Title>
        )}
        <Code size={size} insee={insee} url={url} />
        <Options
          insee={insee}
          setInsee={setInsee}
          size={size}
          setSize={setSize}
        />
      </Configurator>
      <StyledIframe
<<<<<<< HEAD:src/components/Integration.js
        src={`${url}/${
          insee || ''
        }?size=${size}&source=https://recosante.beta.gouv.fr`}
        allowfullscreen={true}
        webkitallowfullscreen={true}
        mozallowfullscreen={true}
=======
        src={`${url}/${insee || ''}?size=${size}`}
        allowFullScreen={true}
>>>>>>> dashboard:src/components/Widget.js
        allow='geolocation'
      />
    </StyledSection>
  ) : null
}
