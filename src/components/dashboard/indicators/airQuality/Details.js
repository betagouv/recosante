import React from 'react'
import styled from 'styled-components'

import Element from './details/Element'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function Details(props) {
  return props.data ? (
    <Wrapper>
      <Element
        label='PM2.5'
        value={props.data.forecast.sous_indices.find(
          (polluant) => polluant.polluant_name === 'PM25'
        )}
      />
      <Element
        label='PM10'
        value={props.data.forecast.sous_indices.find(
          (polluant) => polluant.polluant_name === 'PM10'
        )}
      />
      <Element
        label='NO2'
        value={props.data.forecast.sous_indices.find(
          (polluant) => polluant.polluant_name === 'NO2'
        )}
      />
      <Element
        label='O3'
        value={props.data.forecast.sous_indices.find(
          (polluant) => polluant.polluant_name === 'O3'
        )}
      />
      <Element
        label='SO2'
        value={props.data.forecast.sous_indices.find(
          (polluant) => polluant.polluant_name === 'SO2'
        )}
      />
    </Wrapper>
  ) : null
}
