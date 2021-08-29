import React from 'react'

import Web from 'src/components/layout/Web'
import Notifications from 'src/components/Notifications'

export default function notifications() {
  return (
    <Web title={`Notifications Web`}>
      <Notifications />
    </Web>
  )
}
