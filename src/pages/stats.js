import React from 'react'

import { useStatistiques } from 'src/utils/api'
import Web from 'src/components/layout/Web'
import AllUsers from 'src/components/stats/AllUsers'
import CurrentMonth from 'src/components/stats/CurrentMonth'
import Profile from 'src/components/stats/Profile'
import Satisfaction from 'src/components/stats/Satisfaction'
import MailOpening from 'src/components/stats/MailOpening'

export default function Stats() {
  const { data } = useStatistiques()

  return (
    <Web title={'Statistiques'}>
      {data && (
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
