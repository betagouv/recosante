import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import { useLocalUser } from 'hooks/useUser'

const Wrapper = styled.button`
  padding: 0;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  opacity: ${(props) => (props.static ? 0.5 : 1)};
  cursor: ${(props) => (props.static ? 'normal' : 'pointer')};
`
const Superscript = styled.sup`
  display: inline-block;
  margin-left: 0.2rem;
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`
export default function Subscribe(props) {
  const { setSubscription, setModal } = useContext(ModalContext)
  const { mutateUser } = useLocalUser()

  return (
    <Wrapper
      onClick={() => {
        if (props.disabled) {
          setModal('donneesstatiques')
        } else {
          mutateUser({ indicateurs: [props.indicateur], commune: props.place })
          setSubscription('indicators')
        }
      }}
      static={props.disabled}
    >
      {props.disabled ? `Données statiques` : `M’abonner à cet indicateur`}
      {props.disabled && <Superscript>(?)</Superscript>}
    </Wrapper>
  )
}
