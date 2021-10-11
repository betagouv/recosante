import { useState } from 'react'
import useUrlB64ToUint8Array from 'hooks/useUrlB64ToUint8Array'
import { useStaticQuery, graphql } from 'gatsby'

export default function useNotificationsPrompt(sw) {
  const data = useStaticQuery(
    graphql`
      query {
        applicationServerKey {
          application_server_key
        }
      }
    `
  )

  const applicationServerKey = useUrlB64ToUint8Array(data.applicationServerKey.application_server_key)
  const [error, setError] = useState(false)
  const [prompting, setPrompting] = useState(false)
  const subscribe = () => {
    setPrompting(true)
    return navigator.serviceWorker
      .register(sw)
      .then((registration) => {
        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey,
        })
      })
      .then((pushSubscription) => {
        setPrompting(false)
        setError(false)
        return pushSubscription
      })
      .catch((error) => {
        setPrompting(false)
        console.log(error)
        setError(error.message)
      })
  }

  const clear = () => {
    setError(false)
    setPrompting(false)
  }

  return { error, prompting, subscribe, clear }
}
