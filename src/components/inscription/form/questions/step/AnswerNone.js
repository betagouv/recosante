import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Checkbox from 'src/components/base/Checkbox'

const StyledCheckbox = styled(Checkbox)``
export default function AnswerNone(props) {
  return (
    <StyledCheckbox
      checked={props.answers.includes('aucun')}
      onChange={(checked) => props.setAnswers(checked ? ['aucun'] : [])}
    >
      {props.children}
    </StyledCheckbox>
  )
}
