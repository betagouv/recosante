import React, { useContext } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import useUser from 'hooks/useUser'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function Navigation(props) {
  const { user } = useUser()

  return (
    <Wrapper>
      {(props.currentStep > 0 || props.gotoDeepLastStep) && (
        <Button
          hollow
          onClick={() =>
            props.currentStep > 0
              ? props.setCurrentStep((prevCurrentStep) => prevCurrentStep - 1)
              : props.gotoDeepLastStep()
          }
        >
          Précédent
        </Button>
      )}
      {props.currentStep < props.steps.length && (
        <Button
          disabled={
            !user[props.steps[props.currentStep].name] &&
            props.steps[props.currentStep].mandatory
          }
          onClick={() =>
            props.setCurrentStep((prevCurrentStep) => prevCurrentStep + 1)
          }
        >
          {props.currentStep < props.steps.length - 1 ? 'Suivant' : 'Valider'}
        </Button>
      )}
    </Wrapper>
  )
}
