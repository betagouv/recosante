import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'
import UserContext from 'src/utils/UserContext'

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
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`
export default function Subscribe(props) {
  const { setModal } = useContext(ModalContext)
  const { mutateUser } = useContext(UserContext)
  return (
    <Wrapper>
      <Link
        onClick={() => {
          mutateUser({ indicators: ['indice_atmo'] })
          setModal('inscription')
        }}
      >
        M’abonner à cet indicateur
      </Link>
    </Wrapper>
  )
}
