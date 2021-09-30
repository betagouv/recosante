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
        <Card.Mobile indicateur='raep' place={props.place}>
          <Card.Details>
            <Details data={data} />
          </Card.Details>
          <Card.Recommandation
            dangerouslySetInnerHTML={{
              __html: isError
                ? `Nous ne sommes malheureusement pas en mesure d'afficher le risque d'allergie aux pollens pour l'instant. Veuillez réessayer dans quelques instants.`
                : data && data.raep.advice && data.raep.advice.main,
            }}
          />
        </Card.Mobile>
        <Card.SubscribeWrapper>
          <Card.Subscribe indicateur='raep' place={props.place} />
        </Card.SubscribeWrapper>
      </Card.Content>
      {data && data.raep && data.raep.validity && data.raep.sources && (
        <Card.Source>
          Prévision du{' '}
          {new Date(data.raep.validity.start).toLocaleDateString('fr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          au{' '}
          {new Date(data.raep.validity.end).toLocaleDateString('fr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          à {data.raep.validity.area}
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
