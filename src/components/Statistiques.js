import React from 'react'

import useStatistiques from 'src/hooks/useStatistiques'
import AllUsers from 'src/components/statistiques/AllUsers'
import CurrentMonth from 'src/components/statistiques/CurrentMonth'
import Profile from 'src/components/statistiques/Profile'
import Satisfaction from 'src/components/statistiques/Satisfaction'
import MailOpening from 'src/components/statistiques/MailOpening'

export default function Statistiques() {
  const { stats, openings } = useStatistiques()

  return stats && stats ? (
    <>
      <CurrentMonth
        inscriptions_desinscriptions={stats.inscriptions_desinscriptions}
        totalActifs={stats.total_actifs}
      />
      {stats.total_actifs && (
        <AllUsers
          allUsers={JSON.parse(stats.all_users)}
          totalInscriptions={stats.total_inscriptions}
        />
      )}
      <Profile
        total_allergies={stats.total_allergies}
        total_pathologie_respiratoire={stats.total_pathologie_respiratoire}
        total={stats.total_actifs}
      />
      {stats.decouverte && (
        <Satisfaction satisfaction={JSON.parse(stats.decouverte)} />
      )}
      {openings && openings && openings.openings && (
        <MailOpening openings={JSON.parse(openings.openings)} />
      )}
    </>
  ) : null
}
