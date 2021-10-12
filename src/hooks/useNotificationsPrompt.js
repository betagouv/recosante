import { useState } from 'react'

export default function useNotificationsPrompt(sw, applicationServerKey) {
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
