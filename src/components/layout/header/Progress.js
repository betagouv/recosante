import React, { useContext } from 'react'
import styled from 'styled-components'

import ProfileContext from 'src/utils/ProfileContext'

const Wrapper = styled.div`
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  background-color: ${(props) => props.theme.colors.background};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.main};
    opacity: 0.3;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.main};
    transform: scaleX(${(props) => props.current() / props.total});
    transform-origin: left;
    transition: transform 600ms ease-in-out;
  }
`
export default function Progress() {
  const {
    address,
    vulnerabilities,
    hobbies,
    heating,
    transportations,
    pets,
  } = useContext(ProfileContext)

  return (
    <Wrapper
      current={() => {
        if (!address) {
          return 6
        }
        if (!address.code) {
          return 0
        }
        if (!vulnerabilities.length) {
          return 1
        }
        if (!hobbies.length) {
          return 2
        }
        if (!heating.length) {
          return 3
        }
        if (!transportations.length) {
          return 4
        }
        if (!pets.length) {
          return 5
        }
        return 6
      }}
      total={6}
    />
  )
}
