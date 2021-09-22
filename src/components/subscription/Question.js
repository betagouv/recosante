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
      <Label>{props.label}</Label>
      <Options>
        {props.options.map((option) => (
          <Option
            active={user[props.name] && user[props.name].includes(option.value)}
            onClick={() => {
              mutateUser({
                [props.name]: props.exclusive
                  ? option.value
                  : user[props.name] && user[props.name].includes(option.value)
                  ? user[props.name].filter(
                      (userOption) => userOption !== option.value
                    )
                  : [...(user[props.name] || []), option.value],
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
