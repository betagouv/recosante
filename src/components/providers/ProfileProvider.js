import React, { useState } from 'react'

import ProfileContext from 'src/utils/ProfileContext'

export default function ProfileProvider(props) {
  const [address, setAddress] = useState({ name: '', code: null })
  const [vulnerabilities, setVulnerabilities] = useState([])
  const [hobbies, setHobbies] = useState([])
  const [heating, setHeating] = useState([])
  const [transportations, setTransportations] = useState([])
  const [pets, setPets] = useState([])
  const [found, setFound] = useState([])

  const [creation, setCreation] = useState(true)
  const [complete, setComplete] = useState(false)

  return (
    <ProfileContext.Provider
      value={{
        address,
        setAddress: (value) => {
          setComplete(false)
          setAddress(value)
        },
        vulnerabilities,
        setVulnerabilities: (value) => {
          setComplete(false)
          setVulnerabilities(value)
        },
        hobbies,
        setHobbies: (value) => {
          setComplete(false)
          setHobbies(value)
        },
        heating,
        setHeating: (value) => {
          setComplete(false)
          setHeating(value)
        },
        transportations,
        setTransportations: (value) => {
          setComplete(false)
          setTransportations(value)
        },
        pets,
        setPets: (value) => {
          setComplete(false)
          setPets(value)
        },
        complete,
        setComplete: (value) => {
          setComplete(value)
          if (value) {
            setCreation(false)
            setTimeout(
              () =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                }),
              1000
            )
          }
        },
        found,
        setFound,
        creation,
        setCreation,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}
