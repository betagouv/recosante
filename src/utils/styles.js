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
        1: '#4BF0E6',
        2: '#4FCBAD',
        3: '#F0E65F',
        4: '#FF5354',
        5: '#A83559',
        6: '#7D237D',
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
      small: `@media screen and (max-width: ${47}rem)`,
      medium: `@media screen and (max-width: ${75}rem)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
    
  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts};
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
    font-weight: bold;
    line-height: 1.1;
    color: ${(props) => props.theme.colors.title};
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 4rem;
    
    ${(props) => props.theme.mq.small} {
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }
  }
  h2 {
    margin-bottom: ${(props) => (props.large ? 2 : 1)}rem;
    font-size: ${(props) => (props.large ? 4 : 2.5)}rem;

    ${(props) => props.theme.mq.small} {
      margin-bottom: 1rem;
      font-size: ${(props) => (props.large ? 2 : 1.5)}rem;
    }
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;

    ${(props) => props.theme.mq.small} {
      font-size: 1.5rem;
    }
  }

  p, ul {
    margin-bottom: 1.75em;
    font-size: 1.125rem;

    ${(props) => props.theme.mq.small} {
      font-size: 1rem;
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
    font-weight: inherit;
  }
`
