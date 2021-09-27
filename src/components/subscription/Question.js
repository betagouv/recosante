import React from 'react'
import styled from 'styled-components'

import { useLocalUser } from 'hooks/useUser'

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
  margin-bottom: 4.5rem;
`
const Option = styled.div`
  position: relative;
`
const Button = styled.button`
  width: 10rem;
  height: 10rem;
  color: ${(props) => props.theme.colors[props.active ? 'background' : 'main']};
  border: 0.25rem solid ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  background-color: ${(props) =>
    props.theme.colors[props.active ? 'main' : 'background']};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};

  span {
    display: block;
    text-align: center;
  }
`
const Detail = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.colors[props.onClick ? 'main' : 'text']};
  text-decoration: ${(props) => (props.onClick ? 'underline' : 'none')};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'normal')};
`
export default function Question(props) {
  const { user, mutateUser } = useLocalUser()

  return (
    <Wrapper>
      <Label>{props.step.label}</Label>
      <Options options={props.step.options}>
        {props.step.options.map((option) => (
          <Option key={option.value}>
            <Button
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
              disabled={option.disabled}
            >
              {option.icon}
              <span
                dangerouslySetInnerHTML={{
                  __html: option.label,
                }}
              />
            </Button>
            {option.detail && (
              <Detail onClick={option.detail.onClick}>
                {option.detail.label}
              </Detail>
            )}
          </Option>
        ))}
      </Options>
    </Wrapper>
  )
}
