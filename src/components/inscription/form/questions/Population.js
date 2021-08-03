import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'

import { useProfile, useProfileMutation } from 'src/utils/api'
import Button from 'src/components/base/Button'
import Step from './Step'

export default function Population() {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [population, setPopulation] = useState([])
  useEffect(() => {
    setPopulation(data && data.population ? data.population : [])
  }, [data])

  return data ? (
    <Step
      onSubmit={(e) => {
        e.preventDefault()
        mutation.mutate({ population })
      }}
    >
      <Step.Label>
        Je souhaite recevoir des informations destinées <Step.Value />
      </Step.Label>
      <Step.Answers>
        <Step.Answer
          value='pathologie_respiratoire'
          answers={population}
          setAnswers={setPopulation}
        >
          Aux personnes vulnérables ou sensibles à la qualité de l’air
          <Step.Detail>
            Qu'est ce qu'une personne sensible
            <br />à la qualité de l'air ?
          </Step.Detail>
        </Step.Answer>
        <Step.Answer
          value='allergie_pollens'
          answers={population}
          setAnswers={setPopulation}
        >
          Aux personnes allergiques aux pollens
        </Step.Answer>
        <Step.AnswerNone answers={population} setAnswers={setPopulation}>
          Aucun des deux
        </Step.AnswerNone>
      </Step.Answers>
      <Button>Valider</Button>
    </Step>
  ) : null
}
