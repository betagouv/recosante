import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#000091',
      background: '#fff',
      tile: '#F9F8F6',
      input: '#F0F0F0',
      title: '#1E1E1E',
      text: '#383838',
      border: '#cecece',
      footer: '#6a6a6a',
      success: '#008941',
      error: '#e10600',
    },
    fonts: '"Marianne", Arial, sans-serif',
    mq: {
      small: `@media screen and (max-width: ${730}px)`,
      medium: `@media screen and (max-width: ${1200}px)`,
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

    ${(props) => props.theme.mq.medium} {
      padding-top: 10em;
    }
    ${(props) => props.theme.mq.small} {
      padding-top: 5.5em;
    }
  
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
    margin-bottom: 0.5em;

    ${(props) => props.theme.mq.small} {
      font-size: 1.75em;
    }
  }
  h2 {
    font-size: 2em;
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
