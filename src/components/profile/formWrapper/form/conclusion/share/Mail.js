import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)``
const Svg = styled.svg`
  path {
    fill: ${(props) => props.theme.colors.main};
  }
`
export default function Mail(props) {
  return (
    <Wrapper
      to={`mailto:?subject=Tu%20connais%20Recosant%C3%A9%20%3F&body=Tu%20connais%20Recosant%C3%A9%20%3F%20C'est%20une%20lettre%20d'information%20quotidienne%20qui%20te%20donne%20des%20conseils%20personnalis%C3%A9s%20en%20fonction%20de%20tes%20habitudes%20pour%20te%20prot%C3%A9ger%20des%20impacts%20de%20la%20qualit%C3%A9%20de%20l%E2%80%99air%20sur%20ta%20sant%C3%A9.%20Tous%20les%20matins%2C%20tu%20re%C3%A7ois%20un%20mail%20qui%20t'informe%20de%20la%20qualit%C3%A9%20de%20l'air%20autour%20de%20chez%20toi%20et%20une%20recommandation%20pour%20adapter%20ton%20comportement%20et%2Fou%20tes%20activit%C3%A9s%20en%20fonction.Pour%20t'inscrire%20%3A%20http%3A%2F%2Frecosante.beta.gouv.fr%2F`}
      onClick={
        window._paq &&
        window._paq.push(['trackEvent', 'Social', 'Share', 'Mail'])
      }
    >
      <Svg height='448pt' viewBox='0 0 448 448' width='448pt'>
        <path d='m314.375 144h-180.75l90.375 77.464844zm0 0' />
        <path d='m224 240c-1.910156 0-3.757812-.683594-5.207031-1.929688l-98.792969-84.679687v150.609375h208v-150.609375l-98.792969 84.679687c-1.449219 1.246094-3.296875 1.929688-5.207031 1.929688zm0 0' />
        <path d='m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm120 312c0 4.417969-3.582031 8-8 8h-224c-4.417969 0-8-3.582031-8-8v-176c0-4.417969 3.582031-8 8-8h224c4.417969 0 8 3.582031 8 8zm0 0' />
      </Svg>
    </Wrapper>
  )
}
