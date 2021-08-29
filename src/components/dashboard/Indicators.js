import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import AirQuality from './indicators/AirQuality'
import Pollens from './indicators/Pollens'
import Radon from './indicators/Radon'

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -2rem;
  width: auto;

  .my-masonry-grid_column {
    padding-left: 2rem;
  }
`
export default function Indicators(props) {
  return (
    <StyledMasonry
      breakpointCols={{
        default: 2,
        1200: 1,
      }}
      columnClassName='my-masonry-grid_column'
    >
      <AirQuality place={props.place} />
      <Pollens place={props.place} />
      <Radon place={props.place} />
    </StyledMasonry>
  )
}
