import React, { useState, useEffect, useCallback } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import queryString from 'query-string'

import ProfileContext from 'src/utils/ProfileContext'
import api from 'src/utils/api'

export default function ProfileProvider(props) {
  const [uid, setUid] = useState(null)
  useEffect(() => {
    if (queryString.parse(window.location.search).user) {
      setUid(queryString.parse(window.location.search).user)
    } else {
      navigate(`/`)
    }
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        allFormJson {
          nodes {
            name
            index
            address
            label
            options {
              answer
              detail {
                label
                modal
              }
              label
              value
            }
            detail
          }
        }
      }
    `
  )

  const [profile, setProfile] = useState(null)
  const fetchProfile = useCallback(
    (body) =>
      api
        .fetch(`https://ecosante.beta.gouv.fr/inscription/${uid}`, body)
        .then((res) =>
          setProfile({
            ...res,
            enfants: res.enfants
              ? [res.enfants === 'non' ? 'aucun' : res.enfants]
              : null,
          })
        )
        .catch(setError),
    [uid]
  )

  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (profile) {
      for (let i = 0; i < data.allFormJson.nodes.length; i++) {
        if (
          !profile[data.allFormJson.nodes[i].name] ||
          profile[data.allFormJson.nodes[i].name].length === 0
        ) {
          console.log('wtf')
          setCurrent(i)
          return
        }
      }
      setCurrent(data.allFormJson.nodes.length)
    }
  }, [current, data.allFormJson.nodes, profile])

  const [edit, setEdit] = useState(null)

  useEffect(() => {
    if (uid) {
      fetchProfile()
    }
  }, [uid, fetchProfile])

  const [error, setError] = useState(null)

  const [complete, setComplete] = useState(false)
  useEffect(() => {
    complete &&
      api
        .fetch(`https://ecosante.beta.gouv.fr/inscription/${uid}/_confirm`)
        .then((res) => console.log(res))
        .catch(setError)
  }, [uid, complete])
  console.log(edit)
  return (
    <ProfileContext.Provider
      value={{
        form: data.allFormJson.nodes,
        profile,
        setProfile: (value) => {
          return fetchProfile(value).then(() => setEdit(null))
        },
        current,
        edit,
        setEdit,
        error,
        setError,
        complete,
        setComplete,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}
