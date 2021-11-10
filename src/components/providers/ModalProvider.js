import React, { useState } from 'react'

import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [modal, setModal] = useState()
  const [episodePollution, setEpisodePollution] = useState()
  const [deleteProfile, setDeleteProfile] = useState()
  const [subscription, setSubscription] = useState()
  const [needConfirmation, setNeedConfirmation] = useState(true)
  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        episodePollution,
        setEpisodePollution,
        deleteProfile,
        setDeleteProfile,
        subscription,
        setSubscription: (value) => {
          if (value) {
            setNeedConfirmation(true)
            setSubscription(value)
          } else {
            if (
              !needConfirmation ||
              window.confirm(
                'Souhaitez-vous vraiment abandonner votre inscription ?'
              )
            ) {
              setSubscription(value)
            }
          }
        },
        needConfirmation,
        setNeedConfirmation,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
