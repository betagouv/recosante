import React, { useState } from 'react'

import UserContext from 'src/utils/UserContext'

export default function ModalProvider(props) {
  const [user, setUser] = useState(false)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        mutateUser: (mutation) => setUser({ ...user, ...mutation }),
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
