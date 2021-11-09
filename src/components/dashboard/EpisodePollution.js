import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useIndicators from 'hooks/useIndicators'
import Modal from 'components/base/Modal'

const Title = styled.h3`
  strong {
    text-transform: lowercase;
  }
`
const Recommandation = styled.div`
  font-weight: 300;
`
export default function EpisodePollution(props) {
  const { data } = useIndicators(props.place.code)

  const [open, setOpen] = useState(false)
  useEffect(() => {
    data?.episodes_pollution?.advice && setOpen(false)
  }, [data])

  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>
        Un <strong>{data?.episodes_pollution?.indice?.label}</strong> est prévu
        aujourd'hui à {data?.indice_atmo?.validity?.area}
      </Title>
      <Recommandation
        dangerouslySetInnerHTML={{
          __html: data?.episodes_pollution?.advice?.main,
        }}
      />
    </Modal>
  )
}
