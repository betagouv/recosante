import styled from 'styled-components'

import Recommandation from './card/Recommandation'

const Card = styled.div`
  position: relative;
  width: ${(props) => (props.columns === 6 ? 'auto' : '23rem')};
  margin-bottom: 2rem;
`
Card.Content = styled.div`
  margin-bottom: 0.5rem;
  padding: 2rem 2rem 1.5rem;
  background: rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);
  border: 1px solid rgba(${(props) => props.theme.colors.backgroundAlpha}, 1);
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.25rem 1rem 0
    rgba(${(props) => props.theme.colors.backgroundAlpha}, 0.25);
`
Card.Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
Card.Info = styled.div``
Card.Title = styled.h6`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`
Card.Value = styled.div`
  margin-left: -0.1rem;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  color: ${(props) => props.theme.colors.main};
`
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
