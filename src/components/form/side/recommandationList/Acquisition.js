import React from 'react'

import Question from 'src/components/form/questions/Question'

export default function Animals(props) {
  const name = 'connaissance_produit'
  const label = [`J’ai connu Recosanté `, `J’ai connu Recosanté `]
  const options = [
    {
      value: 'medecin',
      label: `Par le biais de mon médecin`,
    },
    {
      value: 'association',
      label: 'Par une association',
    },
    {
      value: 'reseaux_sociaux',
      label: `Via les réseaux sociaux`,
    },
    {
      value: 'publicite',
      label: 'Par la publicité',
    },
    {
      value: 'ami',
      label: 'Grâce à un·e proche',
    },
    {
      value: 'autrement',
      label: `Autrement`,
    },
  ]
  return <Question name={name} label={label} options={options} />
}
