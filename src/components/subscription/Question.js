import React from 'react'
import styled from 'styled-components'

import { useLocalUser } from 'hooks/useUser'
import Option from './question/Option'
import Disclaimer from './question/Disclaimer'

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
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.options.length === 4 ? 'space-between' : 'space-around'};
  margin-bottom: 4.5rem;
`
export default function Question(props) {
  const { user, mutateUser } = useLocalUser()

  return (
    <Wrapper>
      <Label>{props.step.label}</Label>
      <Options options={props.step.options}>
        {props.step.options.map((option) => (
          <Option
            key={option.value}
            option={option}
            active={
              user[props.step.name] &&
              user[props.step.name].includes(option.value)
            }
            checkbox={!props.step.exclusive}
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
            setModal={props.setModal}
          />
        ))}
        {props.step.name === 'recommandations' && (
          <Disclaimer setModal={props.setModal} />
        )}
      </Options>
    </Wrapper>
  )
}
