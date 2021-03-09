import React, { useState } from 'react'

import ModalContext from 'src/utils/ModalContext'

export default function ModalProvider(props) {
  const [sensible, setSensible] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        sensible,
        setSensible,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
