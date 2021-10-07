import React from 'react'

import { useIndicators } from 'utils/api'
import MagicLink from 'components/base/MagicLink'
import Card from 'components/misc/Card'
import Chart from './indiceAtmo/Chart'
import Details from './indiceAtmo/Details'

export default function AirQuality(props) {
  const { data, isError, isLoading } = useIndicators(props.place.code)

  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isLoading={isLoading} indicateur='indice_atmo'>
              Indice de qualité de l'air
            </Card.Title>
            <Card.Value isError={isError}>
              {isError ? 'Oups 🦔' : data && data.indice_atmo.indice.label}
            </Card.Value>
          </Card.Info>
          <Chart data={data} />
        </Card.Header>
        <Card.Mobile indicateur='indice_atmo' place={props.place}>
          <Card.Details>
            <Details data={data} />
          </Card.Details>
          <Card.Recommandation
            dangerouslySetInnerHTML={{
              __html: isError
                ? `Nous ne sommes malheureusement pas en mesure d'afficher l'indice de qualité de l'air pour l'instant. Veuillez réessayer dans quelques instants.`
                : data &&
                  data.indice_atmo.advice &&
                  data.indice_atmo.advice.main,
            }}
          />
        </Card.Mobile>
        <Card.SubscribeWrapper>
          <Card.Subscribe indicateur='indice_atmo' place={props.place} />
        </Card.SubscribeWrapper>
      </Card.Content>
      {data && (
        <Card.Source>
          Prévision pour le{' '}
          {new Date(data.indice_atmo.validity.start).toLocaleDateString('fr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          à {data.indice_atmo.validity.area}
          <br />
          Données fournies par{' '}
          <MagicLink to={data.indice_atmo.sources[0].url}>
            {data.indice_atmo.sources[0].label}
          </MagicLink>
        </Card.Source>
      )}
    </Card>
  )
}
