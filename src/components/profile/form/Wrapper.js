import styled from 'styled-components'

import Button from 'src/components/base/Button'
import Checkbox from 'src/components/base/Checkbox'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  font-size: 1.375rem;
`
Wrapper.Label = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.title};
`
Wrapper.Answer = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
`
Wrapper.Answers = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
`
Wrapper.Checkbox = styled(Checkbox)`
  margin-left: 1.5rem;
  font-size: 1.125rem;
`
Wrapper.Submit = styled(Button)`
  align-self: flex-end;
`

export default Wrapper
