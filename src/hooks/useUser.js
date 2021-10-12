import { useContext } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useQueryParam } from 'use-query-params'

import UserContext from 'utils/UserContext'
import apiUrl from 'utils/apiUrl'

export function useUser() {
  const [uid] = useQueryParam('user')
  return useQuery(
    ['user', uid],
    () => axios.get(`${apiUrl}/users/${uid}`).then((res) => res.data),
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
        `${apiUrl}/users/${uid || ''}`,
        { ...user, commune: user.commune && { code: user.commune.code } },
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

export function useSendProfileLink() {
  return useMutation((mail) =>
    axios.post(
      `${apiUrl}/users/_send_update_profile`,
      { mail },
      {
        headers: { Accept: ' application/json' },
      }
    )
  )
}

export function useLocalUser() {
  const { user, mutateUser } = useContext(UserContext)

  return { user, mutateUser }
}
