import styled, { keyframes } from 'styled-components'

import Mobile from './card/Mobile'
import Recommandation from './card/Recommandation'

const fetching = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }
  to {
    transform: scaleX(0);
    transform-origin: right;
  }
`
const Card = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`
Card.Content = styled.div`
  margin-bottom: 0.5rem;
  padding: 2rem 2rem 1.5rem;
  background: rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);
  border: 1px solid rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.25rem 1rem 0
    rgba(${(props) => props.theme.colors.backgroundAlpha}, 0.4);

  ${(props) => props.theme.mq.small} {
    padding: 1.5rem;
  }
`
Card.Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    align-items: center;
  }
`
Card.Info = styled.div``
Card.Title = styled.h2`
  position: relative;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
    opacity: 0.7;
    transform: scaleX(0);
    animation: ${(props) => (props.isFetching ? fetching : '')} 1000ms infinite;
  }

  ${(props) => props.theme.mq.small} {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`
Card.Value = styled.div`
  margin-left: -0.1rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.theme.colors[props.isError ? 'error' : 'main']};

  ${(props) => props.theme.mq.small} {
    margin: 0 0 1.5rem;
    font-size: 2.25rem;
    text-align: center;
  }
`
Card.Mobile = Mobile
Card.Details = styled.div`
  margin-bottom: 2rem;
`
Card.Recommandation = Recommandation
Card.Source = styled.div`
  margin-right: 0.5rem;
  font-size: 0.625rem;
  font-weight: 300;
  text-align: right;
  color: ${(props) => props.theme.colors.title};
`

export default Card
