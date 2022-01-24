import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  overflow: visible;
  width: auto;
  height: 10rem;
`

const Circle = styled.circle`
  fill: ${(props) =>
    props.visible ? props.theme.colors.indiceuv[props.value]
      : props.theme.colors.main};
  opacity: ${(props) =>
    props.visible ? 1 : 0.15};
`
const Path = styled.path`
  stroke: ${(props) =>
    props.visible ? props.theme.colors.indiceuv[props.value]
      : props.theme.colors.main};
  opacity: ${(props) =>
    props.visible  ? 1 : 0.15};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
`

export default function Chart(props) {
  const visible = props.data && props.data > 0
  const value = props.data ? props.data.indice_uv.indice.value : 0
  return (
    <Wrapper width='48' height='48' viewBox='0 0 48 48'>
      <Circle
        visible={visible}
        value={value}
        cx='23.9993'
        cy='24.0003'
        r='12.1379'
      />
      <Path
        visible={visible}
        value={value}
        d='M15.6553 38.4141L13.0001 43.0529'
      />
      <Path
        visible={visible}
        value={value}
        d='M35 4.94727L32.3448 9.58602'
      />
      <Path
        visible={visible}
        value={value}
        d='M9.58691 32.3447L4.94815 34.9999'
      />
      <Path
        visible={visible}
        value={value}
        d='M43.0527 13L38.414 15.6552'
      />
      <Path
        visible={visible}
        value={value}
        d='M46 24L40.6896 24'
      />
      <Path
        visible={visible}
        value={value}
        d='M7.31055 24H2.00019'
      />
      <Path
        visible={visible}
        value={value}
        d='M43.0527 35L38.414 32.3448'
      />
      <Path
        visible={visible}
        value={value}
        d='M9.58691 15.6548L4.94815 12.9996'
      />
      <Path
        visible={visible}
        value={value}
        d='M35 43.0527L32.3448 38.414'
      />
      <Path
        visible={visible}
        value={value}
        d='M15.6553 9.58594L13.0001 4.94717'
      />
      <Path
        visible={visible}
        value={value}
        d='M24 7.31055L24 2.00019'
      />
      <Path
        visible={visible}
        value={value}
        d='M24 46V40.6896'
      />
    </Wrapper>
  )
}
