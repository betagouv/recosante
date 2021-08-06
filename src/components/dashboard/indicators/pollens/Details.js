import React from 'react'
import styled from 'styled-components'

import Element from './details/Element'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`
const Elements = styled.div``
export default function Details(props) {
  return (
    <Wrapper open={props.open}>
      <Elements>
        {props.data &&
          Object.entries(props.data.raep.allergenes)
            .filter((key) => key[1] > 0)
            .sort((a, b) => (a[0] > b[0] ? 1 : -1))
            .map((key, index) => (
              <Element
                key={key[0]}
                index={index}
                open={props.open}
                label={key[0]}
                value={key[1]}
              />
            ))}
      </Elements>
    </Wrapper>
  )
}
