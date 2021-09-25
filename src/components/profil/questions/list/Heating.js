import React from 'react'

import Question from '../Question'

export default function Heating(props) {
  const name = 'chauffage'
  const label = ['Je me chauffe avec ', 'Je me chauffe ']
  const options = [
    {
      value: 'bois',
      label: 'Une cheminée ou poêle à bois',
    },
    {
      value: 'chaudiere',
      label: 'Une chaudière au gaz, fioul ou électrique',
    },
    {
      value: 'appoint',
      label: "Un chauffage mobile d'appoint",
    },
    {
      value: 'aucun',
      label: 'Autrement / Je ne sais pas',
      answer: 'Autrement',
    },
  ]
  return <Question name={name} label={label} options={options} />
}