import React from 'react'

import Element from './details/Element'

export default function Details(props) {
  const values = ['Vert', 'Jaune', 'Orange', 'Rouge']

  return (
    <div>
      {props?.data?.vigilance_meteo?.indice?.details
        .filter(({ indice }) => indice.color !== 'Vert')
        .sort((a, b) =>
          values.indexOf(a.indice.color) > values.indexOf(b.indice.color)
            ? 1
            : -1
        )
        .map(({ indice }) => (
          <Element indice={indice} />
        ))}
    </div>
  )
}
