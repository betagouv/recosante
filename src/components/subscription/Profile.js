import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { useUser } from 'hooks/useUser'
import indicateursSteps from 'utils/indicateursSteps'
import recommandationsSteps from 'utils/recommandationsSteps'
import UnloggedForm from 'components/misc/UnloggedForm'
import Mail from './profile/Mail'
import Address from './profile/Address'
import Step from './profile/Step'
import Delete from './profile/Delete'

const Title = styled.h1`
  margin-bottom: 4rem;
`
export default function Profile() {
  const [user] = useQueryParam('user')

  const { data } = useUser()

  return (
    <>
      <Title>Préférences</Title>
      {user ? (
        <>
          <Mail />
          <Address />
          {indicateursSteps.map((step) => (
            <Step
              step={step}
              key={step.name}
              large={
                step.name === 'indicateurs' || step.name === 'recommandations'
              }
            />
          ))}
          {data &&
            data['recommandations'] &&
            recommandationsSteps.map((step) => (
              <Step step={step} key={step.name} />
            ))}

          <Delete />
        </>
      ) : (
        <UnloggedForm />
      )}
      <ToastContainer
        position='bottom-left'
        transition={Slide}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        limit={2}
      />
    </>
  )
}
