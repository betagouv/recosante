import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'src/utils/ModalContext'
import useUser from 'hooks/useUser'

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
  const { mutateUser } = useUser()

  return (
    <Wrapper>
      <Link
        onClick={() => {
          mutateUser({ indicateurs: props.indicateur, commune: props.place })
          setModal('indicators')
        }}
      >
        M’abonner à cet indicateur
      </Link>
    </Wrapper>
  )
}
