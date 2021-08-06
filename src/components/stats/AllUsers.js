import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import StyleContext from 'src/utils/StyleContext'
import Section from 'src/components/base/Section'

const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
`
export default function AllUsers(props) {
  const { themes, theme } = useContext(StyleContext)
  const data = Object.keys(props.allUsers).map((key) => ({
    date: key,
    inscriptions: props.allUsers[key],
  }))

  const [width, setWidth] = useState(null)
  useEffect(() => {
    setTimeout(() => setWidth(window.innerWidth), 100)
  }, [])

  return (
    <Section xlarge>
      <Section.Title center>
        Inscriptions depuis le lancement du service Recosanté
      </Section.Title>
      <Section.Subtitle center>(hors désinscriptions)</Section.Subtitle>
      <Wrapper>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis
              dataKey='date'
              tick={{ fontSize: 12 }}
              interval={width < 1200 ? 'preserveStartEnd' : 0}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              dataKey='inscriptions'
              stroke={themes[theme].colors.main}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Wrapper>
    </Section>
  )
}
