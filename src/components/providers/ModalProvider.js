import React, { useState } from 'react'

import ModalContext from 'src/utils/ModalContext'

export default function ModalProvider(props) {
  const [modal, setModal] = useState('inscription')

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}
