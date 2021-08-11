import React from 'react'

import MagicLink from 'src/components/base/MagicLink'
import Card from 'src/components/misc/Card'
import Chart from './airQuality/Chart'
import Details from './airQuality/Details'

export default function AirQuality(props) {
  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title>Indice de qualité de l'air</Card.Title>
            <Card.Value>{props.data && props.data.forecast.label}</Card.Value>
          </Card.Info>
          <Chart data={props.data} />
        </Card.Header>
        <Card.Mobile>
          <Card.Details>
            <Details data={props.data} />
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
      {props.data && (
        <Card.Source>
          Prévision pour le {props.data.forecast.date} à {props.place.nom}
          <br />
          Données fournies par{' '}
          <MagicLink to={props.data.metadata.region.website}>
            {props.data.metadata.region.nom_aasqa}
          </MagicLink>
        </Card.Source>
      )}
    </Card>
  )
}
