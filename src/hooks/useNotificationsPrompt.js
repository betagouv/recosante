import { useState } from 'react'
import axios from 'axios'
import { make_api_url } from '../utils/api';
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')
  ;
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export default function useNotificationsPrompt(sw) {
  const [error, setError] = useState(false)
  const [prompting, setPrompting] = useState(false)

  const subscribe = () => {
    //Check if avail
    setPrompting(true)
    return axios.get(make_api_url('_application_server_key')).then(
      response => {
        return navigator.serviceWorker
          .register(sw)
          .then((registration) => {
            const subscribeOptions = {
              userVisibleOnly: true,
              applicationServerKey: urlB64ToUint8Array(response.data.application_server_key),
            }

            return registration.pushManager.subscribe(subscribeOptions)
          })
          .then((pushSubscription) => {
            setPrompting(false)
            setError(false)
            return pushSubscription
          })
          .catch((error) => {
            setPrompting(false)
            setError(error.message)
          })
      }
    )
  }

  const clear = () => {
    setError(false)
    setPrompting(false)
  }

  return { error, prompting, subscribe, clear }
}
