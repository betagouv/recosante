import { useQuery } from 'react-query'
import axios from 'axios'

import apiUrl from 'utils/apiUrl'

export default function useIndicators(code) {
  return useQuery(
    ['indicators', code],
    () =>
      axios
        .get(`${apiUrl}/v1/?insee=${code}&show_raep=true`)
        .then((res) => res.data),
    {
      enabled: code ? true : false,
      keepPreviousData: code ? false : true,
      refetchOnWindowFocus: false,
    }
  )
}
