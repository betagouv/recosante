import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import StyleContext from 'src/utils/StyleContext'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
`
export default function Opening(props) {
  const { themes, theme } = useContext(StyleContext)
  const data = Object.keys(props.openings).map((key) => ({
    date: key,
    [`taux d'ouverture`]: Math.round(props.openings[key]),
  }))

  const [width, setWidth] = useState(null)
  useEffect(() => {
    setTimeout(() => setWidth(window.innerWidth), 100)
  }, [])

  return (
    <Section xlarge>
      <Section.Title center>
        <strong>{Math.round(props.yesterday[1])}%</strong> d’ouverture de mail
        (le {props.yesterday[0]})
      </Section.Title>
      <Wrapper>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
          >
            <XAxis
              dataKey='date'
              tick={{ fontSize: 12 }}
              interval={width < 1200 ? 'preserveStartEnd' : 0}
              angle={-45}
              dx={-25}
              dy={25}
            />
            <YAxis />
            <Tooltip />
            <Area
              dataKey={`taux d'ouverture`}
              fill={themes[theme].colors.main}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Wrapper>
    </Section>
  )
}
