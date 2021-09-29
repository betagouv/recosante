import React from 'react'
import styled from 'styled-components'

import { useUser } from 'hooks/useUser'
import Option from 'components/subscription/question/Option'

const Title = styled.h3``
const Text = styled.p``
const Options = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 -0.5rem 3.5rem;
`
export default function Step(props) {
  const { data, isFetching } = useUser()

  console.log(data && data[props.step.name])
  return data ? (
    <div>
      <Title>{props.step.title}</Title>
      <Text>{props.step.label}</Text>
      <Options>
        {props.step.options.map((option) => (
          <Option
            option={option}
            active={
              data[props.step.name] &&
              data[props.step.name].includes(option.value)
            }
          />
        ))}
      </Options>
    </div>
  ) : null
}
