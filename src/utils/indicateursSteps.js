import React from 'react'

import IndiceAtmo from './icons/IndiceAtmo'
import Raep from './icons/Raep'
import IndiceUv from './icons/IndiceUv'
import VigilanceMeteorologique from './icons/IndiceAtmo'
import Quotidien from './icons/Quotidien'
import Alerte from './icons/Alerte'
import Email from './icons/Email'
import Notification from './icons/Notification'
import Newsletter from './icons/Newsletter'
import NoNewsletter from './icons/NoNewsletter'

const steps = [
  {
    name: 'indicateurs',
    title: 'Indicateurs',
    label: 'Je choisis les indicateurs que je souhaite recevoir.',
    options: [
      {
        value: 'indice_atmo',
        label: `Indice de qualité de l'air`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'raep',
        label: `Risque d'allergie aux pollens`,
        icon: <Raep />,
      },
      {
        value: 'indice_uv',
        label: `Indice UV`,
        icon: <IndiceUv />,
        disabled: true,
        detail: {
          label: '(Bientôt disponible)',
        },
      },
      {
        value: 'vigilance_meteorologique',
        label: `Vigilance météorologique`,
        icon: <VigilanceMeteorologique />,
        disabled: true,
        detail: {
          label: '(Bientôt disponible)',
        },
      },
    ],
    mandatory: true,
  },
  {
    name: 'indicateurs_frequence',
    title: 'Fréquence',
    label:
      'Je choisis à quelle fréquence je souhaite recevoir ces indicateurs.',
    options: [
      {
        value: 'alerte',
        label: `En cas<br/>d'alerte`,
        icon: <Alerte />,
      },
      {
        value: 'quotidien',
        label: `Tous les<br/>jours`,
        icon: <Quotidien />,
      },
    ],
    exclusive: true,
    mandatory: true,
  },
  {
    name: 'indicateurs_media',
    title: 'Média',
    label: 'Je choisis de quelle façon je souhaite recevoir ces indicateurs.',
    options: [
      {
        value: 'mail',
        label: `Email`,
        icon: <Email />,
      },
      {
        value: 'notifications_web',
        label: `Notification`,
        icon: <Notification />,
        detail: {
          label: `Qu'est ce que c'est ?`,
          modal: 'notifications',
        },
      },
    ],
    exclusive: true,
    mandatory: true,
  },
  {
    name: 'recommandations',
    title: 'Recommandations',
    label:
      'Je choisis si je souhaite aussi recevoir des conseils pour m’aider à agir pour ma santé.',
    options: [
      {
        value: 'oui',
        label: `M’abonner aux recommandations`,
        icon: <Newsletter />,
      },
      {
        value: 'non',
        label: `Peut être<br/>plus tard`,
        icon: <NoNewsletter />,
      },
    ],
    exclusive: true,
    mandatory: true,
  },
]

export default steps
