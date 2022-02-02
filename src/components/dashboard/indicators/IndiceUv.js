import React from 'react'

import useIndicators from 'hooks/useIndicators'
import MagicLink from 'components/base/MagicLink'
import Card from 'components/misc/Card'
import Chart from './indiceUv/Chart'
import Details from './vigilanceMeteo/Details'

export default function IndiceUv(props) {
  const { data, isError, isLoading } = useIndicators(props.place.code)

  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isLoading={isLoading} indicateur='indiceuv'>
              Indice UV
            </Card.Title>
            <Card.Value isError={isError}>
              {isError
                ? 'Zut 🦙'
                : data &&
                  (data.indice_uv?.indice?.label
                    ? data.indice_uv.indice.label
                    : 'Pas de données')}
            </Card.Value>
          </Card.Info>
          <Chart data={data && !data.indice_uv?.error && data} />
        </Card.Header>
        <Card.Mobile indicateur='indiceuv' place={props.place}>
          <Card.Details>
            <Details data={data && !data.indice_uv?.error && data} />
          </Card.Details>
          <Card.Recommandation
            dangerouslySetInnerHTML={{
              __html: isError
                ? `Nous ne sommes malheureusement pas en mesure d'afficher l'indice UV pour l'instant. Veuillez réessayer dans quelques instants.`
                : data &&
                  (data.indice_uv?.error
                    ? `Les données ne sont pas disponibles pour cette commune`
                    : data.indice_uv?.advice &&
                      data.indice_uv?.advice.main),
            }}
          />
        </Card.Mobile>
        <Card.SubscribeWrapper>
          <Card.Subscribe indicateur='indiceuv' place={props.place} />
        </Card.SubscribeWrapper>
      </Card.Content>
      {data && data.indice_uv?.validity && (
          <Card.Source>
            Prévision pour le{' '}
            {new Date(data.indice_uv.validity.start).toLocaleDateString(
              'fr',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}{' '}
            à {data.indice_uv.validity.area}
            <br />
            Données fournies par{' '}
            {data.indice_uv.sources && (
              <MagicLink to={data.indice_uv.sources[0].url}>
                {data.indice_uv.sources[0].label}
              </MagicLink>
            )}
          </Card.Source>
        )}
    </Card>
  )
}
