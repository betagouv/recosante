import { useContext } from 'react'

import UserContext from 'utils/UserContext'

export default function useLocalUser() {
  const { user, mutateUser } = useContext(UserContext)

  return { user, mutateUser }
}
