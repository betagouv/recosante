import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import StyleContext from 'src/utils/StyleContext'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
`
export default function ActiveUsers(props) {
  const { themes, theme } = useContext(StyleContext)
  const data = Object.keys(props.activeUsers).map((key) => ({
    date: key,
    inscriptions: props.activeUsers[key],
  }))

  const [width, setWidth] = useState(null)
  useEffect(() => {
    setTimeout(() => setWidth(window.innerWidth), 100)
  }, [])

  return (
    <Section xlarge>
      <Section.Title center>
        <strong>{props.totalActifs}</strong> abonné·e·s
      </Section.Title>
      <Wrapper>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis
              dataKey='date'
              tick={{ fontSize: 12 }}
              interval={width < 1200 ? 'preserveStartEnd' : 0}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='inscriptions' fill={themes[theme].colors.main} />
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    </Section>
  )
}
