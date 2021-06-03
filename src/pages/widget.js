import React, { useState } from 'react'
import styled from 'styled-components'
import IframeResizer from 'iframe-resizer-react'

import Web from 'src/components/layout/Web'
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
const Title = styled.h1``

export default function Widget() {
  const [size, setSize] = useState(16)
  const [insee, setInsee] = useState(null)

  const url = 'https://recosante-widget.netlify.app'
  return (
    <Web title={'Widget'}>
      <StyledSection xlarge>
        <Configurator>
          <Title>
            Intégrer le widget <strong>Recosanté</strong>
          </Title>
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
    </Web>
  )
}
