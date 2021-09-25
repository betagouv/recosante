import React from 'react'

import Web from 'src/components/layout/Web'
import Dashboard from 'src/components/Dashboard'

export default function Place(props) {
  return (
    <Web title={props.pageContext.place.nom}>
      <Dashboard place={props.pageContext.place} />
    </Web>
  )
}
