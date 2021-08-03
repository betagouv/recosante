import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Checkbox from 'src/components/base/Checkbox'

const StyledCheckbox = styled(Checkbox)``
export default function Answer(props) {
  return (
    <StyledCheckbox
      checked={props.answers.includes(props.value)}
      onChange={(checked) =>
        props.setAnswers((prevAnswers) =>
          prevAnswers
            .filter((answer) => answer !== props.value)
            .filter((answer) => answer !== 'aucun')
            .concat(checked ? [props.value] : [])
        )
      }
    >
      {props.children}
    </StyledCheckbox>
  )
}
