import React from 'react'

import Element from './details/Element'

export default function Details(props) {
  const values = ['Vert', 'Jaune', 'Orange', 'Rouge']

  return (
    <div>
      {props?.data?.vigilance_meteo?.indice?.details
        .sort((a, b) =>
          values.indexOf(a.label) > values.indexOf(b.label) ? 1 : -1
        )
        .map(({ indice }) => (
          <Element indice={indice} />
        ))}
    </div>
  )
}
