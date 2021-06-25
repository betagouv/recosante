import React, { useState } from 'react'
import styled from 'styled-components'
import IframeResizer from 'iframe-resizer-react'

import Section from 'src/components/layout/Section'
import Code from 'src/components/widget/Code'
import Options from 'src/components/widget/Options'

const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
    align-items: center;
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
const Configurator = styled.div`
  max-width: 400px;
  margin-top: 2rem;
`
export default function Integration() {
  const [size, setSize] = useState(16)
  const [insee, setInsee] = useState(null)

  const url = 'https://app.recosante.beta.gouv.fr'

  return (
    <StyledSection large>
      <Configurator>
        <Section.Title>
          Intégrez <strong>Recosanté</strong> sur votre site.
        </Section.Title>
        <Code size={size} insee={insee} url={url} />
        <Options
          insee={insee}
          setInsee={setInsee}
          size={size}
          setSize={setSize}
        />
      </Configurator>
      <StyledIframe
        src={`${url}/${insee || ''}?size=${size}`}
        allowfullscreen={true}
        webkitallowfullscreen={true}
        mozallowfullscreen={true}
        allow='geolocation'
      />
    </StyledSection>
  )
}
