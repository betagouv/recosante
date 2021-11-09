import React, { useState, useEffect } from 'react'

import useIndicators from 'hooks/useIndicators'
import Modal from 'components/base/Modal'

export default function EpisodePollution(props) {
  const { data } = useIndicators(props.place.code)

  const [open, setOpen] = useState(false)
  useEffect(() => {
    data && setOpen(false)
  }, [data])
  return (
    <Modal open={open} setOpen={setOpen}>
      EpisodePollution
    </Modal>
  )
}
