import React from 'react'

import IndiceAtmo from './icons/IndiceAtmo'

const steps = [
  {
    name: 'activites',
    title: 'Activités',
    label:
      'Je renseigne les activités que je pratique au moins 2h par semaine.',
    options: [
      {
        value: 'jardinage',
        label: `Jardinage`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'bricolage',
        label: `Bricolage`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'menage',
        label: `Ménage`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'sport',
        label: `Sport`,
        icon: <IndiceAtmo />,
      },
    ],
  },
  {
    name: 'enfants',
    title: 'Enfants',
    label: 'Je renseigne si je vis avec des enfants.',
    options: [
      {
        value: 'oui',
        label: `Un ou plusieurs enfants`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'non',
        label: `Pas d'enfant`,
        icon: <IndiceAtmo />,
      },
    ],
  },
  {
    name: 'chauffage',
    title: 'Chauffage',
    label: 'Je renseigne le mode de chauffage de mon foyer.',
    options: [
      {
        value: 'bois',
        label: `Cheminée ou poêle à bois`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'chaudiere',
        label: `Chaudière au gaz, fioul ou électrique`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'appoint',
        label: `Chauffage mobile d’appoint`,
        icon: <IndiceAtmo />,
      },
    ],
  },
  {
    name: 'transport',
    title: 'Transport',
    label: 'Je renseigne les modes de transport que j’utilise.',
    options: [
      {
        value: 'oui',
        label: `Vélo`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'tec',
        label: `Transport en commun`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'voiture',
        label: `Voiture`,
        icon: <IndiceAtmo />,
      },
    ],
  },
  {
    name: 'animaux',
    title: 'Animaux',
    label: 'Je renseigne si je vis avec des animaux.',
    options: [
      {
        value: 'oui',
        label: `Chat`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'non',
        label: `Chien`,
        icon: <IndiceAtmo />,
      },
    ],
  },
]

export default steps
