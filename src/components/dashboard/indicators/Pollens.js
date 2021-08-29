import React from 'react'

import { useIndicators } from 'src/utils/api'
import MagicLink from 'src/components/base/MagicLink'
import Card from 'src/components/misc/Card'
import Chart from './pollens/Chart'
import Details from './pollens/Details'

export default function AirQualityIndex(props) {
  const { data, isError, isFetching } = useIndicators(props.place.code)

  const labels = [
    'Nul',
    'Très faible',
    'Faible',
    'Moyen',
    'Élevé',
    'Très élevé',
  ]
  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isFetching={isFetching}>
              Risque d’allergie aux pollens
            </Card.Title>
            <Card.Value isError={isError}>
              {isError ? 'Zut 🦙' : data && labels[data.raep.total]}
            </Card.Value>
          </Card.Info>
          <Chart data={data} />
        </Card.Header>
        <Card.Mobile>
          <Card.Details>
            <Details data={data} open={true} />
          </Card.Details>
          <Card.Recommandation
            intro={`En cas de gêne répétitive et saisonnière liée aux symptômes ci-dessous, et dans un contexte de fatigue inhabituelle, vous souffrez peut être d’une allergie aux pollens. Prendre conseil auprès d’un professionnel.`}
          >
            <p>ℹ️ Les symptômes en cas d’allergie aux pollens sont :</p>
            <ul>
              <li>crises d’éternuement ;</li>
              <li>nez qui gratte, parfois bouché ou qui coule clair ;</li>
              <li>yeux rouges, qui démangent ou qui larmoient ;</li>
              <li>
                en association éventuelle avec une respiration sifflante ou une
                toux.
              </li>
            </ul>
            <p>
              💡L’allergie peut bénéficier de mesures de prévention et de soins.
              Pour cela demandez conseil à votre pharmacien ou consultez votre
              médecin.
            </p>
          </Card.Recommandation>
        </Card.Mobile>
      </Card.Content>
      {data && (
        <Card.Source>
          Prévision du {data.raep.periode_validite.debut} au{' '}
          {data.raep.periode_validite.fin} à {props.place.nom}
          <br />
          Données fournies par{' '}
          <MagicLink to='https://www.pollens.fr'>
            Le Réseau national de surveillance aérobiologique
          </MagicLink>
        </Card.Source>
      )}
    </Card>
  )
}
