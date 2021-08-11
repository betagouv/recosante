import React from 'react'
import styled from 'styled-components'

import Checkbox from 'src/components/base/Checkbox'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
`
const Detail = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors[props.link ? 'main' : 'text']};
  text-decoration: ${(props) => (props.link ? 'underline' : 'none')};
`
const StyledCheckbox = styled(Checkbox)`
  margin-left: 1.5rem;

  ${(props) => props.theme.mq.small} {
    margin-left: 0.5rem;
  }
`
export default function Answers(props) {
  return (
    <Wrapper>
      {props.options.map((option) =>
        option.value !== 'aucun' && !option.exclusive ? (
          <StyledCheckbox
            key={option.value}
            checked={props.answers.includes(option.value)}
            onChange={(checked) =>
              props.setAnswers((prevAnswers) =>
                prevAnswers
                  .filter((answer) => answer !== option.value)
                  .filter((answer) => answer !== 'aucun')
                  .concat(checked ? [option.value] : [])
              )
            }
          >
            {option.label}
            {option.detail && (
              <Detail
                link={option.detail.onClick}
                onClick={option.detail.onClick}
                dangerouslySetInnerHTML={{
                  __html: option.detail.label,
                }}
              />
            )}
          </StyledCheckbox>
        ) : (
          <StyledCheckbox
            key={option.value}
            checked={props.answers.includes(option.value)}
            onChange={(checked) =>
              props.setAnswers(checked ? [option.value] : [])
            }
          >
            {option.label}
            {option.detail && (
              <Detail
                onClick={option.detail.onClick}
                dangerouslySetInnerHTML={{
                  __html: option.detail.label,
                }}
              />
            )}
          </StyledCheckbox>
        )
      )}
    </Wrapper>
  )
}
