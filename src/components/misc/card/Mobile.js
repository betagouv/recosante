import React, { useState } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import useWindowSize from 'src/hooks/useWindowSize'

const Wrapper = styled.div`
  text-align: center;
`
const ButtonMore = styled.button`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`

export default function Recommandation(props) {
  const [open, setOpen] = useState(false)

  const { width } = useWindowSize()
  return width > 1200 ? (
    props.children
  ) : (
    <>
      <AnimateHeight duration={300} height={open ? 'auto' : 0}>
        {props.children}
      </AnimateHeight>
      <AnimateHeight duration={300} height={open ? 0 : 'auto'}>
        <Wrapper>
          <ButtonMore onClick={() => setOpen((prevOpen) => !prevOpen)}>
            Voir le détail
          </ButtonMore>
        </Wrapper>
      </AnimateHeight>
    </>
  )
}
