import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import { useQueryParam, StringParam } from 'use-query-params'

import { useProfile } from 'src/utils/api'
import Questions from './form/Questions'
import Illustrations from './form/Illustrations'
import RecommandationList from './form/RecommandationList'

const Wrapper = styled.div``
export default function Form() {
  const location = useLocation()

  const [current, setCurrent] = useQueryParam('step', StringParam)

  const { data, isFetching } = useProfile(location)
  useEffect(() => {
    if (data) {
      const steps = [
        'ville_insee',
        'population',
        'activites',
        'enfants',
        'chauffage',
        'deplacement',
        'animaux_domestiques',
        'connaissance_produit',
      ]
      setCurrent(steps.filter((step) => !data[step])[0])
    }
  }, [data, isFetching])

  return (
    <Wrapper>
      <Questions />
      {true ? <Illustrations /> : <RecommandationList />}
    </Wrapper>
  )
}
