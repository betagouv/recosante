import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import { useQueryParam, StringParam } from 'use-query-params'

import { useProfile } from 'src/utils/api'
import Mail from './questions/Mail'
import Address from './questions/Address'
import Frequency from './questions/list/Frequency'
import Notifications from './questions/list/Notifications'
import Population from './questions/list/Population'
import Hobbies from './questions/list/Hobbies'
import Family from './questions/list/Family'
import Heating from './questions/list/Heating'
import Transportation from './questions/list/Transportation'
import Animals from './questions/list/Animals'

const Wrapper = styled.div`
  width: 29.25rem;
  margin-right: 2rem;
`
export default function Questions() {
  const location = useLocation()

  const [current, setCurrent] = useQueryParam('step', StringParam)

  const { data, isFetching } = useProfile(location)
  useEffect(() => {
    if (data) {
      const steps = [
        'ville_insee',
        // 'frequence',
        //'notifications',
        'population',
        'activites',
        'enfants',
        'chauffage',
        'deplacement',
        'animaux_domestiques',
        'connaissance_produit',
      ]
      setCurrent(steps.filter((step) => !data[step])[0] || 'end')
    }
  }, [data, isFetching])

  return (
    <Wrapper>
      <Mail />
      <Address />
      <Frequency />
      <Notifications />
      <Population />
      <Hobbies />
      <Family />
      <Heating />
      <Transportation />
      <Animals />
    </Wrapper>
  )
}
