import React from 'react'
import styled from 'styled-components'

import Mail from './share/Mail'
import Messenger from './share/Messenger'
import Whatsapp from './share/Whatsapp'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`
const Title = styled.h2``
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  svg {
    width: 3.5rem;
    height: auto;
  }
`
export default function Share() {
  const url = 'https://recosante.beta.gouv.fr'
  const title =
    'Recosanté - Une recommandation quotidienne pour vous protéger de la pollution de l’air'

  const message = `Tu connais Recosanté ? C'est une lettre d'information quotidienne qui te donne des conseils personnalisés en fonction de tes habitudes pour te protéger des impacts de la qualité de l’air sur ta santé. Tous les matins, tu reçois un mail qui t'informe de la qualité de l'air autour de chez toi et une recommandation pour adapter ton comportement et/ou tes activités en fonction. Pour t'inscrire : http://recosante.beta.gouv.fr/`

  return (
    <Wrapper>
      <Title>
        Partager <strong>Recosanté</strong>
      </Title>
      <Buttons>
        <Mail title={title} message={message} url={url} />
        <Messenger title={title} message={message} url={url} />
        <Whatsapp title={title} message={message} url={url} />
      </Buttons>
    </Wrapper>
  )
}
