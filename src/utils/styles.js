import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#000091',
      background: '#fff',
      tile: '#f9f8f6',
      input: '#F0F0F0',
      title: '#1E1E1E',
      text: '#383838',
      border: '#cecece',
      footer: '#6a6a6a',
      success: '#008941',
      error: '#e10600',
      disabled: '#d5dbef',
    },
    fonts: '"Marianne", Arial, sans-serif',
    mq: {
      small: `@media screen and (max-width: ${41}rem)`,
      medium: `@media screen and (max-width: ${55}rem)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts};
    text-rendering: geometricPrecision;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.4;
    overflow-x: hidden;
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: 800;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.title};
  }

  h1 {
    font-size: 3em;
    margin-bottom: 2rem;

    ${(props) => props.theme.mq.small} {
      font-size: 1.75em;
    }
  }
  h2 {
    font-size: 2.3125rem;
    margin-bottom: 0.8em;

    ${(props) => props.theme.mq.small} {
      font-size: 1.5em;
    }
  }
  h3 {
    font-size: 1.5em;
    margin-bottom: 1em;

    ${(props) => props.theme.mq.small} {
      font-size: 1.125em;
    }
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }

  input, select, textarea {
    color: ${(props) => props.theme.colors.text};
  }
`
