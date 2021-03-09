import React, { useState /*useEffect*/ } from 'react'
//import { navigate } from 'gatsby'
//import queryString from 'query-string'

import ProfileContext from 'src/utils/ProfileContext'
//import api from 'src/utils/api'

export default function ProfileProvider(props) {
  const [address, setAddress] = useState({
    name: '',
    code: null,
  })
  const [vulnerabilities, setVulnerabilities] = useState([])
  const [hobbies, setHobbies] = useState([])
  const [heating, setHeating] = useState([])
  const [transportations, setTransportations] = useState([])
  const [pets, setPets] = useState([])
  const [source, setSource] = useState([])

  const [creation, setCreation] = useState(true)
  const [complete, setComplete] = useState(false)

  const [error, setError] = useState(null)

  /*const [uid, setUid] = useState(null)
  useEffect(() => {
    if (queryString.parse(window.location.search).user) {
      setUid(queryString.parse(window.location.search).user)
    } else {
      navigate(`/`)
    }
  }, [])

  useEffect(() => {
    if (uid) {
      api
        .get(`https://ecosante.beta.gouv.fr/inscription/${uid}`)
        .then((res) => {
          if (res.ville_insee) {
            api
              .get(
                `https://geo.api.gouv.fr/communes?&boost=population&limit=100&fields=nom&code=${res.ville_insee}`
              )
              .then((city) =>
                setAddress({
                  name: city[0] ? city[0].nom : '',
                  code: res.ville_insee,
                })
              )
          } else {
            setAddress({ name: '', code: null })
          }
          setHobbies(res.activites || [])
          setHeating(res.chauffage || [])
          setTransportations(res.deplacement || [])
          setPets(res.animaux || [])
          setSource(res.source || [])
        })
        .catch(setError)
    }
  }, [uid])
  */

  /*const sendProfileToApi = (body) => console.log('fake call')
  api
    .post(`https://ecosante.beta.gouv.fr/inscription/o96mGLm8/`, body)
    .then((res) => {
      if (res.ville_insee) {
        api
          .get(
            `https://geo.api.gouv.fr/communes?&boost=population&limit=100&fields=nom&code=${res.ville_insee}`
          )
          .then((city) =>
            setAddress({ name: city[0].nom, code: res.ville_insee })
          )
      } else {
        setAddress({ name: '', code: null })
      }
      setVulnerabilities(['pollens'])
      setHobbies(res.activites || [])
      setHeating(res.chauffage || [])
      setTransportations(res.deplacement || [])
      setPets(res.animaux || [])
      setSource(res.source || [])
    })
    .catch(setError)*/

  return (
    <ProfileContext.Provider
      value={{
        address,
        setAddress: (value) => {
          setComplete(false)
          return Promise.resolve(setAddress(value))
          /*return sendProfileToApi({
            ville_insee: value.code,
          })*/
        },
        vulnerabilities,
        setVulnerabilities: (value) => {
          setComplete(false)
          return Promise.resolve(setVulnerabilities(value))
          /*return sendProfileToApi({
            allergie_pollen: value.includes('pollens'),
            pathologie_respiratoire: value.includes('vulnerable'),
          })*/
        },
        hobbies,
        setHobbies: (value) => {
          setComplete(false)
          return Promise.resolve(setHobbies(value))
          /*return sendProfileToApi({
            activites: value,
          })*/
        },
        heating,
        setHeating: (value) => {
          setComplete(false)
          return Promise.resolve(setHeating(value))
          /*return sendProfileToApi({
            chauffage: value,
          })*/
        },
        transportations,
        setTransportations: (value) => {
          setComplete(false)
          return Promise.resolve(setTransportations(value))
          /*return sendProfileToApi({
            deplacement: value,
          })*/
        },
        pets,
        setPets: (value) => {
          setComplete(false)
          return Promise.resolve(setPets(value))
          /*return sendProfileToApi({
            animaux: value,
          })*/
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
        source,
        setSource: (value) => {
          return Promise.resolve(setSource(value))
          /*return sendProfileToApi({
            source: value,
          })*/
        },
        creation,
        setCreation,
        error,
        setError,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}
