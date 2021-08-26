import styled from 'styled-components'

const Wrapper = styled.form`
  position: relative;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin-bottom: 2rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.medium} {
    display: ${(props) => (props.isCurrent ? 'block' : 'none')};
  }
  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
Wrapper.NoForm = styled.div`
  position: relative;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin-bottom: 2rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.medium} {
    display: ${(props) => (props.isCurrent ? 'block' : 'none')};
  }
  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
Wrapper.Response = styled.div`
  position: relative;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
`

Wrapper.Label = styled.div`
  display: block;
  color: ${(props) => props.theme.colors[props.blue ? 'main' : 'title']};
  cursor: pointer;
`

export default Wrapper
