import styled from 'styled-components'

export default styled.div`
  position: relative;
  z-index: 1;
  width: 24rem;
  padding: 1.5rem 1.5rem 1.8125rem;
  background-color: ${(props) => props.theme.colors.background};

  ${(props) => props.theme.mq.medium} {
    width: 36.5rem;
  }

  ${(props) => props.theme.mq.small} {
    width: 90vw;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.3125rem;
    background-color: ${(props) =>
      props.theme.colors[props.color] || props.theme.colors.main};
  }
`
