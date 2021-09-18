/*eslint-disable eqeqeq*/

import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useQueryParam } from 'use-query-params'

export function useSearch(search) {
  return useQuery(
    ['search', search],
    () =>
      search.length > 2
        ? axios
            .get(
              `https://geo.api.gouv.fr/communes?&boost=population&limit=10&fields=nom,code,codesPostaux&${
                Number(search) == search
                  ? 'codePostal=' + search
                  : 'nom=' + search
              }`
            )
            .then((res) => res.data)
        : Promise.resolve([]),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
}
export function usePosition(position, pathname) {
  return useQuery(
    ['position', position?.timestamp],
    () =>
      axios
        .get(
          `https://geo.api.gouv.fr/communes?&boost=population&limit=1&fields=nom,code,codesPostaux&lon=${position.coords.longitude}&lat=${position.coords.latitude}`
        )
        .then((res) => res.data),
    {
      enabled: position ? true : false,
      refetchOnWindowFocus: false,
    }
  )
}
export function useCode(code) {
  return useQuery(
    ['code', code],
    () =>
      axios
        .get(`https://geo.api.gouv.fr/communes?limit=1&fields=nom&code=${code}`)
        .then((res) => res.data),
    {
      enabled: code ? true : false,
      keepPreviousData: code ? false : true,
      refetchOnWindowFocus: false,
    }
  )
}

export function useIndicators(code) {
  return useQuery(
    ['indicators', code],
    () =>
      axios
        .get(`https://api.recosante.beta.gouv.fr/v1/?insee=${code}`)
        .then((res) => res.data),
    {
      enabled: code ? true : false,
      keepPreviousData: code ? false : true,
      refetchOnWindowFocus: false,
    }
  )
}
export function useRecommandations() {
  return useQuery(
    ['recommandations'],
    () =>
      axios
        .get(
          `https://ecosante.beta.gouv.fr/recommandations/_list?categories=montrer_dans_le_widget&order=random`
        )
        .then((res) => res.data),
    {
      keepPreviousData: true,
      retryDelay: 500,
      refetchOnWindowFocus: false,
    }
  )
}
export function useStatistiques() {
  return useQuery(['statistiques'], () =>
    axios.get(`https://ecosante.beta.gouv.fr/stats/`).then((res) => res.data)
  )
}
export function useProfile() {
  const [uid] = useQueryParam('user')
  return useQuery(
    ['profile', uid],
    () =>
      axios
        .get(`https://ecosante.beta.gouv.fr/inscription/${uid}`)
        .then((res) => res.data),
    {
      enabled: uid ? true : false,
      refetchOnWindowFocus: false,
    }
  )
}
export function useProfileMutation() {
  const [uid] = useQueryParam('user')
  const queryClient = useQueryClient()
  return useMutation(
    (profile) =>
      axios.post(`https://ecosante.beta.gouv.fr/inscription/${uid}`, profile, {
        headers: { Accept: ' application/json' },
      }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(['profile', uid])
      },
    }
  )
}
export function useSubscribe() {
  return useMutation((mail) =>
    axios.post(
      `https://ecosante.beta.gouv.fr/inscription/premiere-etape`,
      mail,
      {
        headers: { Accept: ' application/json' },
      }
    )
  )
}
export function useCompleteSubscription() {
  const [uid] = useQueryParam('user')
  return useQuery(
    ['complete', uid],
    () =>
      axios
        .get(`https://ecosante.beta.gouv.fr/inscription/${uid}/_confirm`)
        .then((res) => res.data),
    {
      enabled: uid ? true : false,
      refetchOnWindowFocus: false,
    }
  )
}
export function useAvis(location) {
  const [short_id] = useQueryParam('short_id')
  const [appliquee] = useQueryParam('avis')
  return useQuery(
    ['profile', short_id, appliquee],
    () =>
      axios
        .post(
          `https://ecosante.beta.gouv.fr/newsletter/${short_id}/avis?appliquee=${appliquee}`,
          null,
          {
            headers: { Accept: ' application/json' },
          }
        )
        .then((res) => res.data),
    {
      enabled: short_id && appliquee ? true : false,
      refetchOnWindowFocus: false,
    }
  )
}
export function useAvisMutation() {
  const [short_id] = useQueryParam('short_id')
  const [appliquee] = useQueryParam('avis')
  return useMutation((avis) =>
    axios.post(
      `https://ecosante.beta.gouv.fr/newsletter/${short_id}/avis?appliquee=${appliquee}`,
      avis,
      {
        headers: {
          Accept: ' application/json',
          'Content-Type': 'application/json',
        },
      }
    )
  )
}
export function useInscriptionPatients() {
  return useMutation((nom_medecin, mails) =>
    axios.post(
      `https://ecosante.beta.gouv.fr/inscription-patients`,
      { nom_medecin, mails },
      {
        headers: {
          Accept: ' application/json',
          'Content-Type': 'application/json',
        },
      }
    )
  )
}
