import { useState } from 'react'

export default function useUser() {
  const [user, setUser] = useState({})

  const mutateUser = (mutation) => {
    setUser({
      ...user,
      ...mutation,
    })
  }

  return { user, mutateUser }
}
