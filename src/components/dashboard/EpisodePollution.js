import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import useIndicators from 'hooks/useIndicators'
import Button from 'components/base/Button'
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

  const { episodePollution, setEpisodePollution } = useContext(ModalContext)
  useEffect(() => {
    data?.episodes_pollution?.advice && setEpisodePollution(true)
  }, [data])

  return (
    <Modal open={episodePollution} setOpen={setEpisodePollution}>
      <Title>
        Un <strong>{data?.episodes_pollution?.indice?.label}</strong> est prévu
        aujourd'hui à {data?.indice_atmo?.validity?.area}
      </Title>
      <Recommandation
        dangerouslySetInnerHTML={{
          __html: data?.episodes_pollution?.advice?.main,
        }}
      />
      {data?.indice_atmo?.sources && (
        <Button.Wrapper center>
          <Button to={data?.indice_atmo?.sources[0]?.url}>
            En savoir plus
          </Button>
        </Button.Wrapper>
      )}
    </Modal>
  )
}
