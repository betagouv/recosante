import { useContext } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useQueryParam } from 'use-query-params'

import UserContext from 'utils/UserContext'

export function useUser() {
  const [uid] = useQueryParam('user')
  return useQuery(
    ['profile', uid],
    () =>
      axios
        .get(`https://staging.api.recosante.beta.gouv.fr/users/${uid}`)
        .then((res) => res.data),
    {
      enabled: uid ? true : false,
      refetchOnWindowFocus: false,
    }
  )
}

export function useUserMutation() {
  const [uid] = useQueryParam('user')
  const queryClient = useQueryClient()
  return useMutation(
    (user) =>
      axios.post(
        `https://staging.api.recosante.beta.gouv.fr/users/`,
        { ...user, commune: { code: user.commune?.code } },
        {
          headers: { Accept: ' application/json' },
        }
      ),
    {
      onSettled: () => {
        queryClient.invalidateQueries(['user', uid])
      },
    }
  )
}

export function useLocalUser() {
  const { user, mutateUser } = useContext(UserContext)

  return { user, mutateUser }
}
