import React from 'react'
import styled from 'styled-components'
import useRecommandations from 'hooks/useRecommandations'

const Type = styled.h2`
  margin-bottom: 2rem;
`
const Recommandation = styled.div`
  margin-bottom: 1rem;
`

export default function Recommandations(props) {
  const types = {
    "episode_pollution": "Épisode de pollution",
    "indice_atmo": "Qualité de l’air",
    "pollens": "Pollens",
    "vigilance_meteo": "Vigilance météo",
    "indice_uv": "Indice UV",
    "baignades": "Qualité des eaux de baignade",
    "radon": "Potentiel Radon"
  }
  const { data } = useRecommandations()
  const groupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      acc[key] ??= [];
      acc[key].push(obj);
      return acc;
    }, {});
  }
  const recommandations = groupBy(data || props.recommandations, 'type')
  return (
    <>
      {
        Object.keys(types).map((t) => (
          <section id={t} key={t}>
            {recommandations[t] && (
              <>
                <Type>{types[t]}</Type>
                {recommandations[t].map((r, i) => (
                  <Recommandation
                    key={t + '-' + i}
                    dangerouslySetInnerHTML={{
                      __html: r.recommandation
                    }} />
                ))}
              </>
            )}
          </section>
        ))
      }
    </>
  )
}
