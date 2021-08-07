import React, { useState } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const ButtonMore = styled.button`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`
const ButtonLess = styled(ButtonMore)`
  position: absolute;
  bottom: 0;
  right: 0;
`
const Arrow = styled.svg`
  width: 1.25rem;
  height: auto;
  transform: scaleY(${(props) => (props.open ? -1 : 1)});
  transition: transform 300ms ease-out;

  path {
    fill: ${(props) => props.theme.colors.main};
  }
`
const Introduction = styled.p`
  font-weight: 300;
`
const Text = styled.p`
  margin-bottom: 1.5rem;
  font-weight: 300;
`
const LearnMore = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 23.5rem;
    margin: 0 auto 0.75rem;
    text-align: center;

    ${(props) => props.theme.mq.small} {
      width: auto;
      margin-bottom: 1rem;
    }
  }
`
export default function Recommandation(props) {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Introduction>{props.intro}</Introduction>
      {props.children && (
        <>
          <AnimateHeight duration={300} height={open ? 'auto' : 0}>
            <Text>{props.children}</Text>
            <LearnMore>
              <p>
                Vous souhaitez recevoir ces recommandations et indicateurs
                quotidiennement ? Abonnez vous à la{' '}
                <strong>lettre d'information Recosanté</strong>
                <span
                  dangerouslySetInnerHTML={{
                    __html: '&#8239;',
                  }}
                />
                !
              </p>
              <Button>Je m'abonne</Button>
              <ButtonLess onClick={() => setOpen((prevOpen) => !prevOpen)}>
                <Arrow open={open} width='32' height='20' viewBox='0 0 32 20'>
                  <path d='M15.9999 19.1204C15.4264 19.1204 14.853 18.9014 14.4157 18.4644L0.656452 4.70499C-0.218817 3.82972 -0.218817 2.41062 0.656452 1.5357C1.53137 0.660788 2.95018 0.660788 3.82552 1.5357L15.9999 13.7108L28.1744 1.53613C29.0496 0.661213 30.4683 0.661213 31.3432 1.53613C32.2188 2.41104 32.2188 3.83014 31.3432 4.70541L17.5841 18.4648C17.1466 18.9019 16.5732 19.1204 15.9999 19.1204Z' />
                </Arrow>
              </ButtonLess>
            </LearnMore>
          </AnimateHeight>
          <AnimateHeight duration={300} height={open ? 0 : 'auto'}>
            <ButtonMore onClick={() => setOpen((prevOpen) => !prevOpen)}>
              Afficher la suite
            </ButtonMore>
          </AnimateHeight>
        </>
      )}
    </Wrapper>
  )
}
