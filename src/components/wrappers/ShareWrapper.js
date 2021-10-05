import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      place={props.place}
      messages={{
        mail: {
          simulator: {
            subject: `Coucou, tu aimes le radon ?`,
            body: `Bonjour,
`,
          },
          result: {
            subject: `Coucou, tu aimes le radon ?`,
            body: `Bonjour,
`,
          },
        },
        facebook: {
          simulator: {
            quote: 'Coucou, tu aimes le radon ?',
          },
          result: {
            quote: `${props.result} - Coucou, tu aimes le radon ?`,
          },
        },
        twitter: {
          simulator: {
            title: 'Coucou, tu aimes le radon ?',
          },
          result: {
            title: `${props.result} - Coucou, tu aimes le radon ?`,
          },
        },
        whatsapp: {
          simulator: {
            title: 'Coucou, tu aimes le radon ?',
          },
          result: {
            title: `${props.result} - Coucou, tu aimes le radon ?`,
          },
        },
      }}
    />
  )
}
