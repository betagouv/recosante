import React, { useState, useEffect } from 'react'

import api from 'src/utils/api'
import Web from 'src/components/layout/Web'
import Subscriptions from 'src/components/stats/Subscriptions'
import Profile from 'src/components/stats/Profile'
import Satisfaction from 'src/components/stats/Satisfaction'
import MailOpening from 'src/components/stats/MailOpening'

export default function Stats(props) {
  const [data, setData] = useState(null)
  useEffect(() => {
    api
      .fetch(`https://ecosante.beta.gouv.fr/stats/`)
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, [])
  console.log(data)
  return (
    <Web title={'Statistiques'}>
      {data && (
        <>
          {data.subscriptions && (
            <Subscriptions
              subscriptions={JSON.parse(data.subscriptions)}
              totalSubscriptions={data.nb_inscriptions}
            />
          )}
          <Profile
            nb_allergies={data.nb_allergies}
            nb_pathologie_respiratoire={data.nb_pathologie_respiratoire}
            total={data.nb_inscriptions}
          />
          {data.decouverte && (
            <Satisfaction satisfaction={JSON.parse(data.decouverte)} />
          )}
          {data.decouverte && (
            <MailOpening
              openings={JSON.parse(data.ouvertures)}
              yesterday={data.ouverture_veille}
            />
          )}
        </>
      )}
    </Web>
  )
}
