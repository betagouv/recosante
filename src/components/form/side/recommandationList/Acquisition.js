import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import { useProfile, useProfileMutation } from 'src/utils/api'
import Wrapper from 'src/components/form/questions/question/Wrapper'
import Answers from 'src/components/form/questions/question/Answers'
import Button from 'src/components/base/Button'

const StyledButton = styled(Button)`
  align-self: flex-end;
`
export default function Animals(props) {
  const name = 'connaissance_produit'
  const label = [`J’ai connu Recosanté `, `J’ai connu Recosanté `]
  const options = [
    {
      value: 'medecin',
      label: `Par le biais de mon médecin`,
    },
    {
      value: 'association',
      label: 'Par une association',
    },
    {
      value: 'reseaux_sociaux',
      label: `Via les réseaux sociaux`,
    },
    {
      value: 'publicite',
      label: 'Par la publicité',
    },
    {
      value: 'ami',
      label: 'Grâce à un·e proche',
    },
    {
      value: 'autrement',
      label: `Autrement`,
    },
  ]

  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [answers, setAnswers] = useState([])
  useEffect(() => {
    setAnswers(
      data && data[name] ? (name === 'enfants' ? [data[name]] : data[name]) : []
    )
  }, [data, name])

  const isCurrent = true

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ [name]: answers })
      }}
      visible={answers.length || isCurrent}
      isCurrent={isCurrent}
    >
      <Wrapper.Label>
        {answers[0] === 'aucun' && !isCurrent ? label[1] : label[0]}
      </Wrapper.Label>

      <Wrapper.Response visible={isCurrent}>
        <Answers options={options} answers={answers} setAnswers={setAnswers} />
        <StyledButton hollow={answers.length}>Valider</StyledButton>
      </Wrapper.Response>
    </Wrapper>
  ) : null
}
