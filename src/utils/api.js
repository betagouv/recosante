/*eslint-disable eqeqeq*/

import { useQuery } from 'react-query'
import axios from 'axios'

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
      enabled: position && pathname === '/' ? true : false,
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
        .get(`https://ecosante.beta.gouv.fr/data?insee=${code}`)
        .then((res) => res.data),
    {
      enabled: code ? true : false,
      keepPreviousData: code ? false : true,
      retryDelay: 500,
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
