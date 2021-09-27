import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'
import { useLocalUser } from 'hooks/useUser'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${(props) => props.theme.mq.medium} {
    justify-content: center;
  }
`
const Link = styled.button`
  padding: 0;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
`
export default function Subscribe(props) {
  const { setModal } = useContext(ModalContext)
  const { mutateUser } = useLocalUser()

  return (
    <Wrapper>
      <Link
        onClick={() => {
          mutateUser({ indicateurs: [props.indicateur], commune: props.place })
          setModal('indicators')
        }}
        disabled={props.disabled}
      >
        {props.disabled ? `Données fixes` : `M’abonner à cet indicateur`}
      </Link>
    </Wrapper>
  )
}
