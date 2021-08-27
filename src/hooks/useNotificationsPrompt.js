import { useState } from 'react'

export default function useNotificationsPrompt(sw, applicationServerKey) {
  const [error, setError] = useState(false)
  const [prompting, setPrompting] = useState(false)

  const subscribe = () => {
    //Check if avail
    setPrompting(true)
    return navigator.serviceWorker
      .register(sw)
      .then((registration) => {
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey,
        }

        return registration.pushManager.subscribe(subscribeOptions)
      })
      .then((pushSubscription) => {
        setPrompting(false)
        return pushSubscription
      })
      .catch((error) => {
        setPrompting(false)
        setError(error.message)
      })
  }

  const clear = () => {
    setError(false)
    setPrompting(false)
  }

  return { error, prompting, subscribe, clear }
}
