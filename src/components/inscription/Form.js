import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import { useProfile } from 'src/utils/api'
import Questions from './form/Questions'
import Illustrations from './form/Illustrations'
import RecommandationList from './form/RecommandationList'

const Wrapper = styled.div``
export default function Form() {
  const location = useLocation()

  const [current, setCurrent] = useState(0)

  const { data } = useProfile(location)
  useEffect(() => {
    if (data) {
      const steps = [
        'ville_insee',
        'population',
        'activites',
        'connaissance_produit',
        'enfants',
        'deplacement',
        'animaux_domestiques',
        'chauffage',
      ]
      setCurrent(steps.filter((step) => !data[step])[0])
    }
  }, [data])

  return (
    <Wrapper>
      <Questions current={current} />
      {true ? <Illustrations /> : <RecommandationList />}
    </Wrapper>
  )
}
