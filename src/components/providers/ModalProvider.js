import React, { useState } from 'react'

import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [modal, setModal] = useState()
  const [subscription, setSubscription] = useState()
  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        subscription,
        setSubscription: (value, force) => {
          if (
            value ||
            force ||
            window.confirm(
              'Souhaitez-vous vraiment abandonner votre inscription ?'
            )
          ) {
            setSubscription(value)
          }
        },
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
