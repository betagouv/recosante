import { useQuery } from 'react-query'
import axios from 'axios'

import apiUrl from 'utils/apiUrl'

export default function useStatistiques() {
  const stats = useQuery(
    ['stats'],
    () =>
      axios
        .get(`${apiUrl}/stats`, {
          headers: {
            Accept: ' application/json',
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  )
  const openings = useQuery(
    ['openoings'],
    () =>
      axios
        .get(`${apiUrl}/stats/openings`, {
          headers: {
            Accept: ' application/json',
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  )
  return { stats: stats.data, openings: openings.data }
}
