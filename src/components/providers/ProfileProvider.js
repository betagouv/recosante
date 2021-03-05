import React, { useState } from 'react'

import ProfileContext from 'src/utils/ProfileContext'

export default function ProfileProvider(props) {
  const [address, setAddress] = useState({ name: 'Fontain', code: 25660 })
  const [vulnerabilities, setVulnerabilities] = useState([])
  const [hobbies, setHobbies] = useState([])
  const [heating, setHeating] = useState([])
  const [transportations, setTransportations] = useState([])
  const [pets, setPets] = useState([])

  return (
    <ProfileContext.Provider
      value={{
        address,
        setAddress,
        vulnerabilities,
        setVulnerabilities,
        hobbies,
        setHobbies,
        heating,
        setHeating,
        transportations,
        setTransportations,
        pets,
        setPets,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}
