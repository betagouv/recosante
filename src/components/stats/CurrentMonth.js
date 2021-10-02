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

import StyleContext from 'utils/StyleContext'
import Section from 'components/base/Section'

const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
`

export default function CurrentMonth(props) {
  const { themes, theme } = useContext(StyleContext)
  const data = props.inscriptions_desinscriptions.map((v) => ({
    semaine: `du ${v[0]}`,
    inscriptions: v[1][0],
    desinscriptions: -v[1][1],
  }))
  const [width, setWidth] = useState(null)
  useEffect(() => {
    setTimeout(() => setWidth(window.innerWidth), 100)
  }, [])

  const today = new Date()
  return (
    <Section xlarge>
      <Section.Title center>
        <strong>{props.totalActifs}</strong>&nbsp; abonné·e·s
      </Section.Title>
      <Section.Subtitle center>
        (au {today.toLocaleDateString()})
      </Section.Subtitle>
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
