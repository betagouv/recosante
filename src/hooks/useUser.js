import { useContext } from 'react'

import UserContext from 'utils/UserContext'

export default function useWindowSize() {
  const { user, mutateUser } = useContext(UserContext)

  return { user, mutateUser }
}
