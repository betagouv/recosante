import React from 'react'
import { Router } from '@reach/router'

import Profile from 'src/components/Profile'

export default function Index() {
  return (
    <Router basepath='/user'>
      <Profile path='/:uid' />
      <Profile path='/*' />
    </Router>
  )
}
