import React from 'react'

import { useIndicators } from 'src/utils/api'
import MagicLink from 'src/components/base/MagicLink'
import Card from 'src/components/misc/Card'
import Chart from './potentielRadon/Chart'

export default function PotentielRadon(props) {
  const { data, isError, isLoading } = useIndicators(props.place.code)

  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isLoading={isLoading}>Potentiel Radon</Card.Title>
            <Card.Value isError={isError}>
              {isError
                ? 'Arf 🦖'
                : (data && data.potentiel_radon.indice.label) || '...'}
            </Card.Value>
          </Card.Info>
          <Chart data={data} />
        </Card.Header>
        <Card.Mobile>
          <Card.Recommandation>
            {data &&
              data.potentiel_radon.advice &&
              data.potentiel_radon.advice.main}
          </Card.Recommandation>
        </Card.Mobile>
      </Card.Content>
      {data &&
        data.potentiel_radon &&
        data.potentiel_radon.validity &&
        data.potentiel_radon.sources && (
          <Card.Source>
            Prévision du {data.potentiel_radon.validity.start} au{' '}
            {data.potentiel_radon.validity.end} à{' '}
            {data.potentiel_radon.validity.area}
            <br />
            Données fournies par{' '}
            <MagicLink to={data.potentiel_radon.sources[0].url}>
              {data.potentiel_radon.sources[0].label}
            </MagicLink>
          </Card.Source>
        )}
    </Card>
  )
}
