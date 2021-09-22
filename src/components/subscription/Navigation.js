import React, { useContext } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import useUser from 'hooks/useUser'

const Wrapper = styled.div``
export default function Navigation(props) {
  const { user, mutateUser } = useUser()

  return (
    <Wrapper>
      {props.currentStep > 0 && (
        <Button
          hollow
          onClick={() =>
            props.setCurrentStep((prevCurrentStep) => prevCurrentStep - 1)
          }
        >
          Précédent
        </Button>
      )}
      {props.currentStep < props.totalSteps && (
        <Button
          onClick={() =>
            props.setCurrentStep((prevCurrentStep) => prevCurrentStep + 1)
          }
        >
          {props.currentStep < props.totalSteps - 1 ? 'Suivant' : 'Valider'}
        </Button>
      )}
    </Wrapper>
  )
}
