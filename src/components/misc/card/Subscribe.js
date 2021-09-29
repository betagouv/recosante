import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'
import { useLocalUser } from 'hooks/useUser'

const Wrapper = styled.button`
  padding: 0;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
`
export default function Subscribe(props) {
  const { setSubscription } = useContext(ModalContext)
  const { mutateUser } = useLocalUser()

  return (
    <Wrapper>
      <Wrapper
        onClick={() => {
          mutateUser({ indicateurs: [props.indicateur], commune: props.place })
          setSubscription('indicators')
        }}
        disabled={props.disabled}
      >
        {props.disabled ? `Données fixes` : `M’abonner à cet indicateur`}
      </Wrapper>
    </Wrapper>
  )
}
