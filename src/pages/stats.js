import React from 'react'

import Web from 'components/layout/Web'

<<<<<<< HEAD
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
          {data_openings &&
            data_openings.openings &&
            data_openings.opening_yesterday && (
              <MailOpening
                openings={JSON.parse(data_openings.openings)}
                yesterday={data_openings.opening_yesterday}
              />
            )}
        </>
      )}
    </Web>
  )
=======
export default function Stats() {
  return <Web title={'Statistiques'}>TO DO</Web>
>>>>>>> dashboard
}
