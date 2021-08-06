import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import { useIndicators } from 'src/utils/api'
import AirQuality from './indicators/AirQuality'
import Pollens from './indicators/Pollens'
import Radon from './indicators/Radon'
import Next from './indicators/Next'

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -2rem;
  width: auto;

  .my-masonry-grid_column {
    padding-left: 2rem;
  }
`
export default function Indicators(props) {
  const { data, isFetching, isFetched, isError } = useIndicators(
    props.place.code
  )
  console.log(data)
  return (
    <StyledMasonry breakpointCols={2} columnClassName='my-masonry-grid_column'>
      <AirQuality data={data} place={props.place} />
      <Pollens data={data} place={props.place} />
      <Radon data={data} place={props.place} />
      <Next />
    </StyledMasonry>
  )
}