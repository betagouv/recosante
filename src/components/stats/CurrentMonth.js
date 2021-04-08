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

export default function CurrentMonth(props) {
  const { themes, theme } = useContext(StyleContext)

  const weeks = new Set([
    ...Object.keys(props.inscriptions),
    ...Object.keys(props.desinscriptions),
  ])
  const data = Array.from(weeks)
    .map((key) => ({
      semaine: `Semaine ${key}`,
      inscriptions: props.inscriptions[key],
      desinscriptions: -props.desinscriptions[key],
    }))
    .filter((d) => !isNaN(d.inscriptions) && !isNaN(d.desinscriptions))

  const [width, setWidth] = useState(null)
  useEffect(() => {
    setTimeout(() => setWidth(window.innerWidth), 100)
  }, [])

const today = new Date();
  return (
    <Section xlarge>
      <Section.Title center>
            <strong>{props.totalActifs}</strong>&nbsp;
            abonné·e·s
      </Section.Title>
      <Section.Title center tiny>
        (au {today.toLocaleDateString()})
      </Section.Title>
      <Wrapper>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis
              dataKey='semaine'
              tick={{ fontSize: 12 }}
              interval={width < 1200 ? 'preserveStartEnd' : 0}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='inscriptions' fill={themes[theme].colors.main} />
            <Bar dataKey='desinscriptions' fill={themes[theme].colors.error} />
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    </Section>
  )
}
