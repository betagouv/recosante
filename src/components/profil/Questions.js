import React, { useEffect } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useQueryParam, StringParam, BooleanParam } from 'use-query-params'

import { useUser } from 'hooks/useUser'
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
import Acquisition from './questions/list/Acquisition'
import Delete from './questions/list/Delete'

const Wrapper = styled.div`
  width: 29.25rem;
  margin-right: 2rem;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
  }
`
export default function Questions() {
  const [user] = useQueryParam('user')
  const [current, setCurrent] = useQueryParam('step', StringParam)
  const [subscription] = useQueryParam('subscription', BooleanParam)

  const { data, isFetching } = useUser()
  useEffect(() => {
    if (data) {
      const steps = [
        'mail',
        'ville_insee',
        'recommandations',
        'notifications',
        'population',
        'activites',
        'enfants',
        'chauffage',
        'deplacement',
        'animaux_domestiques',
        'connaissance_produit',
      ]
      setCurrent(steps.find((step) => !data[step]) || 'end')
    }
  }, [data, isFetching, setCurrent])

  useEffect(() => {
    if (subscription && current === 'end') {
      navigate(`/profil/complete?user=${user}`)
    }
  }, [subscription, current, user])
  return (
    <Wrapper current={current}>
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
      <Acquisition />
      <Delete />
    </Wrapper>
  )
}
