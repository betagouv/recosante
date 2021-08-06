import React from 'react'

import MagicLink from 'src/components/base/MagicLink'
import Card from 'src/components/misc/Card'
import Chart from './radon/Chart'

export default function Radon(props) {
  const labels = ['Nul', 'Faible', 'Moyen', 'Élevé']
  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title>Potentiel Radon</Card.Title>
            <Card.Value>
              {props.data && labels[props.data.potentiel_radon]}
            </Card.Value>
          </Card.Info>
          <Chart data={props.data} />
        </Card.Header>
        <Card.Recommandation
          intro={`Le radon est un gaz radioactif naturel présent dans le sol et les roches. Le potentiel radon fournit un niveau de risque relatif à l’échelle d’une commune. Il ne présage en rien des concentrations présentes dans votre habitation. Seul un mesurage vous permettra de savoir si du radon est présent dans votre habitation.`}
        />
      </Card.Content>
      {props.data && (
        <Card.Source>
          Mesures valides pour {props.place.nom}
          <br />
          Données fournies par{' '}
          <MagicLink to='https://www.irsn.fr'>
            L'institut de Radioprotection et de Sûreté Nucléaire
          </MagicLink>
        </Card.Source>
      )}
    </Card>
  )
}
