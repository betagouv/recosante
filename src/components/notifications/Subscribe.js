import React from 'react'
import styled from 'styled-components'
import { useQueryParam } from 'use-query-params'

import { useUserMutation } from 'hooks/useUser'
import useNotificationsPrompt from 'src/hooks/useNotificationsPrompt'
import SubscribeForm from 'src/components/misc/SubscribeForm'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'

const Wrapper = styled(Button.Wrapper)`
  max-width: 35.5rem;
`
const StyledAlert = styled(Alert)`
  width: 35.5rem;
  max-width: 100%;
`
export default function Subscribe() {
  const [user] = useQueryParam('user')
  const mutation = useUserMutation()

  const notifications = useNotificationsPrompt(
    '/sw.js',
    'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
  )
  console.log(notifications)
  return user ? (
    mutation.isSuccess ? (
      <StyledAlert>
        <p>Vous avez activé les notifications sur cet appareil !</p>
      </StyledAlert>
    ) : (
      <>
        <Wrapper right>
          <Button
            onClick={() =>
              notifications.subscribe().then(
                (pushSubscription) =>
                  pushSubscription &&
                  mutation.mutate({
                    notifications: 'quotidien',
                    pushSubscription,
                  })
              )
            }
            fetching={mutation.isLoading}
          >
            J'active les notifications web
          </Button>
        </Wrapper>
        {mutation.error && (
          <StyledAlert error>
            <p>Une erreur est survenue :(</p>
          </StyledAlert>
        )}
        {notifications.error && (
          <StyledAlert error>
            {notifications.error ===
            'Registration failed - permission denied' ? (
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
          </StyledAlert>
        )}
      </>
    )
  ) : (
    <SubscribeForm />
  )
}
