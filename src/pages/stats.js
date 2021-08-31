import React, { useState, useEffect } from 'react'

import api from 'src/utils/api'
import Web from 'src/components/layout/Web'
import AllUsers from 'src/components/stats/AllUsers'
import CurrentMonth from 'src/components/stats/CurrentMonth'
import Profile from 'src/components/stats/Profile'
import Satisfaction from 'src/components/stats/Satisfaction'
import MailOpening from 'src/components/stats/MailOpening'

export default function Stats(props) {
  const [data, setData] = useState(null)
  const [data_openings, setDataOpenings] = useState(null)
  useEffect(() => {
    api
      .fetch(`/stats/`)
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    api
      .fetch(`/stats/openings/`)
      .then((res) => setDataOpenings(res))
      .catch((error) => console.log(error))
  }, [])

  return (
    <Web title={'Statistiques'}>
      {data && data_openings && (
        <>
          <CurrentMonth
            inscriptions_desinscriptions={data.inscriptions_desinscriptions}
            totalActifs={data.total_actifs}
          />
          {data.total_actifs && (
            <AllUsers
              allUsers={JSON.parse(data.all_users)}
              totalInscriptions={data.total_inscriptions}
            />
          )}
          <Profile
            total_allergies={data.total_allergies}
            total_pathologie_respiratoire={data.total_pathologie_respiratoire}
            total={data.total_actifs}
          />
          {data.decouverte && (
            <Satisfaction satisfaction={JSON.parse(data.decouverte)} />
          )}
          {data_openings.openings && data_openings.opening_yesterday && (
            <MailOpening
              openings={JSON.parse(data_openings.openings)}
              yesterday={data_openings.opening_yesterday}
            />
          )}
        </>
      )}
    </Web>
  )
}
