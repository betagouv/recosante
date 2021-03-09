import styled from 'styled-components'

import Button from 'src/components/base/Button'
import Checkbox from 'src/components/base/Checkbox'

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  font-size: 1.375rem;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1200ms 1000ms;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
  }
`
Wrapper.Label = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.title};
`
Wrapper.Answers = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
`
Wrapper.Checkbox = styled(Checkbox)`
  margin-left: 1.5rem;
  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`
Wrapper.Submit = styled(Button)`
  align-self: flex-end;
`

export default Wrapper
