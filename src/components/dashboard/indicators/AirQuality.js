import React from 'react'

import { useIndicators } from 'src/utils/api'
import MagicLink from 'src/components/base/MagicLink'
import Card from 'src/components/misc/Card'
import Chart from './airQuality/Chart'
import Details from './airQuality/Details'

export default function AirQuality(props) {
  const { data, isError, isFetching } = useIndicators(props.place.code)

  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isFetching={isFetching}>
              Indice de qualité de l'air
            </Card.Title>
            <Card.Value isError={isError}>
              {isError ? 'Oups 🦔' : data && data.forecast.label}
            </Card.Value>
          </Card.Info>
          <Chart data={data} />
        </Card.Header>
        <Card.Mobile>
          <Card.Details>
            <Details data={data} />
          </Card.Details>
          <Card.Recommandation
            intro={`Même lorsque la qualité de l'air est dégradé comme aujourd’hui, il est nécessaire d'aérer son logement pour faire circuler l'air.`}
          >
            <p>
              ℹ️ Ouvrir les fenêtres au moins 10 minutes, de préférence tôt le
              matin et tard le soir, en dehors des heures de pointe. Les heures
              de pointe où les taux de pollution sont les plus élevés sont
              généralement entre 7h-10h et entre 17h-20h.
            </p>
          </Card.Recommandation>
        </Card.Mobile>
      </Card.Content>
      {data && (
        <Card.Source>
          Prévision pour le {data.forecast.date} à {props.place.nom}
          <br />
          Données fournies par{' '}
          <MagicLink to={data.metadata.region.website}>
            {data.metadata.region.nom_aasqa}
          </MagicLink>
        </Card.Source>
      )}
    </Card>
  )
}
