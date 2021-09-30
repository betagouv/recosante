import React from 'react'
import styled from 'styled-components'

import { useUser, useUserMutation } from 'hooks/useUser'
import Option from 'components/subscription/question/Option'

const Wrapper = styled.div`
  margin-top: ${(props) => (props.large ? 5 : 0)}rem;
`
const Title = styled.h3`
  text-align: center;
`
const Text = styled.p`
  text-align: center;
`
const Options = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -0.5rem 2rem;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }
`
export default function Step(props) {
  const { data } = useUser()
  const mutation = useUserMutation()

  return data ? (
    <Wrapper large={props.large}>
      <Title as={props.large ? 'h2' : 'h3'}>{props.step.title}</Title>
      <Text>{props.step.label}</Text>
      <Options>
        {props.step.options.map((option) => (
          <Option
            key={option.value}
            option={option}
            active={
              data[props.step.name] &&
              data[props.step.name].includes(option.value)
            }
            onClick={() =>
              mutation.mutate({
                [props.step.name]: props.step.exclusive
                  ? [option.value]
                  : data[props.step.name] &&
                    data[props.step.name].includes(option.value)
                  ? data[props.step.name].filter(
                      (userOption) => userOption !== option.value
                    )
                  : [...(data[props.step.name] || []), option.value],
              })
            }
            checkbox={!props.step.exclusive}
          />
        ))}
      </Options>
    </Wrapper>
  ) : null
}
