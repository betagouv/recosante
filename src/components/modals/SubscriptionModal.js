import React, { useContext } from 'react'

import ModalContext from 'src/utils/ModalContext'
import Modal from 'src/components/base/Modal'
import Indicators from 'src/components/Indicators'

export default function WrapperModal() {
  const { subscription, setSubscription } = useContext(ModalContext)

  return (
    <Modal open={subscription} setOpen={setSubscription} large>
      {subscription === 'indicators' && <Indicators />}
    </Modal>
  )
}
