import React from 'react'

export default function Details(props) {
  console.log(props)
  return (
    <div>
      {props?.data?.vigilance_meteo?.indice?.details.map(({ indice }) => (
        <div>
          {indice.label} : {indice.color}
        </div>
      ))}
    </div>
  )
}
