import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  width: auto;
  height: 8rem;
`
const Path = styled.path`
  fill: ${(props) =>
    props.visible && props.index < props.value
      ? props.theme.colors.radon[props.value]
      : props.theme.colors.main};
  opacity: ${(props) =>
    props.visible && props.index < props.value ? 1 : 0.15};
  transition: opacity ${(props) => (props.visible ? 1200 : 0)}ms
      ${(props) => (props.visible ? props.index * 300 + 1800 : 0)}ms,
    fill ${(props) => (props.visible ? 400 : 0)}ms
      ${(props) => (props.visible ? props.index * 300 + 1800 : 0)}ms;
`
export default function Chart(props) {
  return (
    <Wrapper width='104' height='96' viewBox='0 0 104 96' fill='none'>
      <Path
        visible={props.data}
        value={props.data && props.data.potentiel_radon}
        index={1}
        d='M41.9915 38.4233C42.7151 39.9974 44.579 40.6851 46.1492 39.9569C49.8412 38.2452 54.1552 38.2436 57.8511 39.9569C59.4158 40.6819 61.2829 40.003 62.0097 38.4233L75.389 9.33628C76.1118 7.76455 75.4271 5.90184 73.8584 5.17599C60.0395 -1.21986 43.9799 -1.22861 30.1428 5.17599C28.5741 5.90184 27.8893 7.76375 28.6122 9.33628L41.9915 38.4233Z'
      />
      <Path
        visible={props.data}
        value={props.data && props.data.potentiel_radon}
        index={2}
        d='M101.156 54.0651L69.3317 51.1331C67.6004 50.9749 66.0825 52.2533 65.927 53.9729C65.5572 58.0521 63.4228 61.7536 60.0713 64.1283C58.6597 65.1285 58.3249 67.0858 59.3222 68.5009L77.7694 94.6488C78.7699 96.0663 80.7266 96.3978 82.1358 95.3985C94.6423 86.5254 102.607 72.7025 103.987 57.4725C104.144 55.7481 102.877 54.2233 101.156 54.0651Z'
      />
      <Path
        visible={props.data}
        value={props.data && props.data.potentiel_radon}
        index={0}
        d='M43.9294 64.1284C40.5778 61.7537 38.4442 58.0521 38.0737 53.9729C37.9173 52.2469 36.3923 50.9749 34.6689 51.1331L2.84489 54.0651C1.12388 54.2233 -0.143273 55.7482 0.0130386 57.4725C1.39366 72.7018 9.35839 86.5254 21.8649 95.3977C23.2812 96.4026 25.2355 96.0592 26.2305 94.6488L44.6784 68.5001C45.6758 67.0858 45.3409 65.1285 43.9294 64.1284Z'
      />
      <Path
        visible={props.data}
        value={props.data && props.data.potentiel_radon}
        index={0}
        d='M62.2973 52.6866C62.2973 46.9975 57.6778 42.369 51.9998 42.369C46.3218 42.369 41.7031 46.9975 41.7031 52.6866C41.7031 58.3749 46.3218 63.0034 51.9998 63.0034C57.6778 63.0034 62.2973 58.3749 62.2973 52.6866Z'
      />
    </Wrapper>
  )
}
