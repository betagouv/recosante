import React from 'react'
import styled from 'styled-components'

import useUser from 'hooks/useUser'

const Wrapper = styled.div`
  padding-top: 2rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 3rem;
  font-weight: 300;
  text-align: center;
`
const Options = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.options.length === 4 ? 'space-between' : 'space-around'};
  margin-bottom: 3rem;
`
const Option = styled.button`
  width: 10rem;
  height: 10rem;
  color: ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border: 0.25rem solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'main' : 'background']};

  span {
    display: block;
    text-align: center;
  }
`
export default function Question(props) {
  const { user, mutateUser } = useUser()

  return (
    <Wrapper>
      <Label>{props.step.label}</Label>
      <Options options={props.step.options}>
        {props.step.options.map((option) => (
          <Option
            key={option.value}
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
            <span
              dangerouslySetInnerHTML={{
                __html: option.label,
              }}
            />
          </Option>
        ))}
      </Options>
    </Wrapper>
  )
}
