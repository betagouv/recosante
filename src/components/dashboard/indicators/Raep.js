import React from 'react'

import { useIndicators } from 'src/utils/api'
import MagicLink from 'src/components/base/MagicLink'
import Card from 'src/components/misc/Card'
import Chart from './raep/Chart'
import Details from './raep/Details'

export default function Raep(props) {
  const { data, isError, isLoading } = useIndicators(props.place.code)

  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isLoading={isLoading}>
              Risque d’allergie aux pollens
            </Card.Title>
            <Card.Value isError={isError}>
              {isError ? 'Zut 🦙' : data && data.raep.indice.label}
            </Card.Value>
          </Card.Info>
          <Chart data={data} />
        </Card.Header>
        <Card.Mobile>
          <Card.Details>
            <Details data={data} open={true} />
          </Card.Details>
          {data && data.raep.advice && (
            <Card.Recommandation intro={data.raep.advice.main} />
          )}
        </Card.Mobile>
      </Card.Content>
      {data && data.raep && data.raep.validity && data.raep.sources && (
        <Card.Source>
          Prévision du {data.raep.validity.start} au {data.raep.validity.end} à{' '}
          {data.raep.validity.area}
          <br />
          Données fournies par{' '}
          <MagicLink to={data.raep.sources[0].url}>
            {data.raep.sources[0].label}
          </MagicLink>
        </Card.Source>
      )}
    </Card>
  )
}
