import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#000091',
      mainAlpha: '0, 0, 145',
      background: '#fff',
      backgroundAlpha: '255, 255, 255',
      tile: '#f9f8f6',
      input: '#F0F0F0',
      title: '#1E1E1E',
      text: '#383838',
      border: '#cecece',
      footer: '#6a6a6a',
      success: '#008941',
      error: '#e10600',
      disabled: '#d5dbef',
      atmo: {
        bon: '#4BF0E6',
        moyen: '#4FCBAD',
        degrade: '#F0E65F',
        mauvais: '#FF5354',
        'tres-mauvais': '#A83559',
        'extremement-mauvais': '#7D237D',
      },
      raep: {
        1: '#75F94C',
        2: '#387C21',
        3: '#FFFD53',
        4: '#EF8541',
        5: '#EA3421',
      },
      radon: {
        1: '#F0E65F',
        2: '#FFFD53',
        3: '#EA3421',
      },
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
    font-weight: 500;
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
    font-size: 2.5rem;
    margin-bottom: 2rem;

    ${(props) => props.theme.mq.medium} {
      font-size: 2rem;
    }
    ${(props) => props.theme.mq.small} {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;

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

  strong {
    color: ${(props) => props.theme.colors.main};
  }
`
