import React from 'react'
import styled from 'styled-components'
import { FacebookMessengerShareButton } from 'react-share'

const Svg = styled.svg``
export default function Messenger(props) {
  return (
    <FacebookMessengerShareButton url={props.url} appId='537843153878579'>
      <Svg x='0px' y='0px' viewBox='0 0 512 512'>
        <path
          fill='#1E88E5'
          d='M256,0C114.624,0,0,106.112,0,237.024c0,74.592,37.216,141.12,95.392,184.576V512l87.168-47.84  c23.264,6.432,47.904,9.92,73.44,9.92c141.376,0,256-106.112,256-237.024C512,106.112,397.376,0,256,0z'
        />
        <polygon
          fill='#FAFAFA'
          points='281.44,319.2 216.256,249.664 89.056,319.2 228.96,170.656 295.744,240.192 421.376,170.656   '
        />
      </Svg>
    </FacebookMessengerShareButton>
  )
}
