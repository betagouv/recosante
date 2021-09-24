import React from 'react'
import styled from 'styled-components'

import useUser from 'hooks/useUser'

const Wrapper = styled.div``
const Label = styled.label``
const Options = styled.div``
const Option = styled.button`
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'main' : 'background']};
`
export default function Question(props) {
  const { user, mutateUser } = useUser()

  return (
    <Wrapper>
      <Label>{props.step.label}</Label>
      <Options>
        {props.step.options.map((option) => (
          <Option
            active={
              user[props.step.name] &&
              user[props.step.name].includes(option.value)
            }
            onClick={() => {
              mutateUser({
                [props.step.name]: props.step.exclusive
                  ? [option.value]
                  : user[props.step.name] &&
                    user[props.step.name].includes(option.value)
                  ? user[props.step.name].filter(
                      (userOption) => userOption !== option.value
                    )
                  : [...(user[props.step.name] || []), option.value],
              })
            }}
          >
            {option.icon}
            {option.label}
          </Option>
        ))}
      </Options>
    </Wrapper>
  )
}
