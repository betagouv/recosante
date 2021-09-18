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
          props.data.raep.indice.details
            .filter((allergen) => allergen.indice.value)
            .sort((a, b) => (a.indice.value > b.indice.value ? 1 : -1))
            .map((allergen, index) => (
              <Element
                key={allergen.label}
                index={index}
                open={props.open}
                label={allergen.label}
                value={allergen.indice.value}
              />
            ))}
      </Elements>
    </Wrapper>
  )
}
