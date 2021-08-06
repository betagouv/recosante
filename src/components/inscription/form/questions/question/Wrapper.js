import styled from 'styled-components'

import Button from 'src/components/base/Button'

const Wrapper = styled.form`
  position: relative;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin-bottom: 2rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
Wrapper.NoForm = styled.div`
  position: relative;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  margin-bottom: 2rem;
  font-size: 1.125rem;

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
Wrapper.Submit = styled(Button)`
  align-self: flex-end;
`
Wrapper.Label = styled.div`
  display: block;
  color: ${(props) => props.theme.colors.title};
`

export default Wrapper