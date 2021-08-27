import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'
import { useQueryParam } from 'use-query-params'

import useNotificationsPrompt from 'src/hooks/useNotificationsPrompt'
import useSentence from 'src/hooks/useSentence'
import { useProfile, useProfileMutation } from 'src/utils/api'
import Alert from 'src/components/base/Alert'
import Wrapper from './question/Wrapper'
import Value from './question/Value'
import Answers from './question/Answers'
import Submit from './question/Submit'

export default function QuestionNotification(props) {
  const location = useLocation()
  const { data } = useProfile(location)
  const mutation = useProfileMutation(location)

  const [answers, setAnswers] = useState([])
  useEffect(() => {
    setAnswers(
      data && data[props.name]
        ? props.name === 'enfants'
          ? [data[props.name]]
          : data[props.name]
        : []
    )
  }, [data, props.name])

  const sentence = useSentence(answers, props.options)

  const [current, setCurrent] = useQueryParam('step')
  const isCurrent = current === props.name

  const notifications = useNotificationsPrompt(
    '/sw.js',
    'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
  )

  useEffect(() => {
    notifications.clear()
  }, [answers])

  return data ? (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        if (answers.length && answers[0] !== 'aucun') {
          notifications.subscribe().then(
            (pushSubscription) =>
              pushSubscription &&
              mutation.mutate({
                [props.name]: answers,
                pushSubscription,
              })
          )
        } else {
          notifications.clear()
          mutation.mutate({ [props.name]: answers })
        }
      }}
      visible={answers.length || isCurrent}
      isCurrent={isCurrent}
    >
      <Wrapper.Label onClick={() => setCurrent(props.name)} blue={!isCurrent}>
        {answers[0] === 'aucun' && !isCurrent ? props.label[1] : props.label[0]}
        <Value name={props.name} sentence={sentence} />
      </Wrapper.Label>

      <Wrapper.Response visible={isCurrent}>
        <Answers
          options={props.options}
          answers={answers}
          setAnswers={setAnswers}
        />
        <Submit />
      </Wrapper.Response>
      {notifications.error && isCurrent && (
        <Alert error>
          {notifications.error === 'Registration failed - permission denied' ? (
            <p>
              Il semblerait que vous n'avez pas accepté les notifications sur
              votre appareil :(
            </p>
          ) : (
            <p>
              Votre navigateur ne semble pas compatible avec les notifications
              web :(
            </p>
          )}
        </Alert>
      )}
      {notifications.prompting && isCurrent && (
        <Alert>
          Merci d'accepter la demande d'autorisation de votre navigateur pour
          activer les notifications :)
        </Alert>
      )}
    </Wrapper>
  ) : null
}
