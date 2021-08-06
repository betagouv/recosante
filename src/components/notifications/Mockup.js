import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Phone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 12rem), calc(-50% + 4.5rem));
  width: 50.5rem;
`
const Laptop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 2.2rem), calc(-50% - 6rem));
  width: 42rem;
`
export default function Mockup(props) {
  return (
    <>
      <Laptop>
        <StaticImage src={'./mockup/laptop.png'} alt='Laptop' />
      </Laptop>
      <Phone>
        <StaticImage src={'./mockup/phone.png'} alt='Téléphone' />
      </Phone>
    </>
  )
}
