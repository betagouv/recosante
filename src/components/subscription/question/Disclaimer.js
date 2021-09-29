import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.mq.smallish} {
    top: calc(100% - 4.5rem);
  }
`
const Title = styled.div`
  font-size: 0.875rem;
`
const Text = styled.div`
  font-size: 0.75rem;
  font-weight: 300;
`
const Link = styled.button`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`
export default function Disclaimer(props) {
  return (
    <Wrapper>
      <Title>
        Vous recevrez <strong>un email par semaine</strong>.
      </Title>
      <Text>(Vous pourrez vous désabonner à tout moment)</Text>
      <Link onClick={() => props.setModal('newsletter')}>
        Voir à quoi ça ressemble
      </Link>
    </Wrapper>
  )
}
