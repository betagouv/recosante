import React, {
  useState,
  useLayoutEffect,
  useContext,
  useRef,
  useEffect,
} from 'react'
import styled from 'styled-components'

import ProfileContext from 'src/utils/ProfileContext'
import { sendEvent } from 'src/utils/lumiere'
import Title from './form/Title'
import Address from './form/Address'
import Step from './form/Step'
import Conclusion from './form/Conclusion'

const Wrapper = styled.div`
  min-height: ${(props) => props.minHeight}px;
`
const Start = styled.div`
  opacity: ${(props) => (props.complete && props.inscription ? 0 : 1)};
  transition: opacity 500ms ${(props) => (props.complete ? '1200ms' : '0ms')};
`
const End = styled.div`
  position: absolute;
  top: 0;
  opacity: ${(props) => (props.complete && props.inscription ? 1 : 0)};
  transition: opacity 500ms 1600ms;
`
export default function Form(props) {
  const { form, current, edit, complete, setComplete } = useContext(
    ProfileContext
  )

  const ref = useRef()
  const [minHeight, setMinHeight] = useState(0)
  useLayoutEffect(() => {
    setMinHeight(ref.current.clientHeight)
  }, [complete])

  useEffect(() => {
    if (form[current]) {
      sendEvent(['inscription', 'open_step', { step: form[current].name }])
    }
  }, [current, form])

  return (
    <Wrapper minHeight={minHeight}>
      <Start complete={complete} inscription={props.inscription}>
        <Title inscription={props.inscription} />
        {form.map((step, index) =>
          index <= current && (!edit || index <= edit) ? (
            step.address ? (
              <Address key={step.name} step={step} />
            ) : (
              <Step
                key={step.name}
                step={step}
                last={index === form.length - 1}
                inscription={props.inscription}
              />
            )
          ) : null
        )}
      </Start>
      <End complete={complete} inscription={props.inscription} ref={ref}>
        <div>{complete && <Conclusion setComplete={setComplete} />}</div>
      </End>
    </Wrapper>
  )
}
