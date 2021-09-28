import React, { useState } from 'react'

import ModalContext from 'src/utils/ModalContext'

export default function ModalProvider(props) {
  const [modal, setModal] = useState()
  const [subscription, setSubscription] = useState()
  return (
    <ModalContext.Provider
      value={{ modal, setModal, subscription, setSubscription }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
