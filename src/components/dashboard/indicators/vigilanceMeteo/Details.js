import React from 'react'

import Element from './details/Element'

export default function Details(props) {
  const values = ['Vert', 'Jaune', 'Orange', 'Rouge']

  const details = props?.data?.vigilance_meteo?.indice?.details
    .filter(({ indice }) => indice.color !== 'Vert')
    .sort((a, b) =>
      values.indexOf(a.indice.color) > values.indexOf(b.indice.color) ? -1 : 1
    )
  return (
    <div>
      {details?.map(({ indice }, index) => {
        details
          .slice(0, index)
          .find((pastDetail) => pastDetail.indice.label === indice.label)

        return details
          .slice(0, index)
          .find(
            (pastDetail) => pastDetail.indice.label === indice.label
          ) ? null : (
          <Element indice={indice} key={indice.label} />
        )
      })}
    </div>
  )
}
