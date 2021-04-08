import React, { useState, useEffect } from 'react'

import api from 'src/utils/api'
import Web from 'src/components/layout/Web'
import ActiveUsers from 'src/components/stats/ActiveUsers'
import CurrentMonth from 'src/components/stats/CurrentMonth'
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

  return (
    <Web title={'Statistiques'}>
      {data && (
        <>
          {data.total_actifs && (
            <ActiveUsers
              activeUsers={JSON.parse(data.active_users)}
              totalActifs={data.total_actifs}
            />
          )}
          <CurrentMonth
            inscriptions={data.inscriptions}
            desinscriptions={data.desinscriptions}
          />
          {/*<Profile
            total_allergies={data.total_allergies}
            total_pathologie_respiratoire={data.total_pathologie_respiratoire}
            total={data.total_actifs}
          />*/}
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
