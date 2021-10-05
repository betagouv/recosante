import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import { useQueryParam } from 'use-query-params'

export function make_api_url(endpoint) {
  return `${process.env.GATSBY_API_BASE_URL||'https://api.recosante.beta.gouv.fr'}/${endpoint}`
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
export function useStatistiques() {
  return useQuery(['statistiques'], () =>
    axios.get(`https://ecosante.beta.gouv.fr/stats/`).then((res) => res.data)
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
