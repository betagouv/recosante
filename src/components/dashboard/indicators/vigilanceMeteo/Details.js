import React from 'react'

import Element from './details/Element'

export default function Details(props) {
  return (
    <div>
      {props?.data?.vigilance_meteo?.indice?.details.map(({ indice }) => (
        <Element indice={indice} />
      ))}
    </div>
  )
}
