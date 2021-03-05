import React, { useContext } from 'react'

import ProfileContext from 'src/utils/ProfileContext'
import Title from './form/Title'
import Address from './form/Address'
import Step from './form/Step'

export default function Form() {
  const {
    address,
    vulnerabilities,
    setVulnerabilities,
    hobbies,
    setHobbies,
    heating,
    setHeating,
    transportations,
    setTransportations,
    pets,
    setPets,
  } = useContext(ProfileContext)

  return (
    <>
      <Title
        complete={
          vulnerabilities.length &&
          hobbies.length &&
          heating.length &&
          transportations.length &&
          pets.length
        }
      />
      <Address />
      {address.code ? (
        <Step
          options={[
            {
              value: 'vulnerable',
              label: `Vulnérable ou sensible<br/>à la qualité de l’air`,
              answer: `vulnérable ou sensible à la qualité de l’air`,
            },
            {
              value: 'allergic',
              label: `Allergique aux pollens`,
            },
            {
              value: 'none',
              label: `Aucun des deux`,
              answer: `vulnérable, allergique ou sensible`,
            },
          ]}
          answers={vulnerabilities}
          setAnswers={setVulnerabilities}
          label={['Je suis ', 'Je ne suis pas ']}
        />
      ) : null}
      {vulnerabilities.length ? (
        <Step
          options={[
            {
              value: 'gardening',
              label: `Jardinage`,
            },
            {
              value: 'diy',
              label: `Bricolage`,
            },
            {
              value: 'cleaning',
              label: `Ménage`,
            },
            {
              value: 'sport',
              label: `Sport`,
            },
            {
              value: 'none',
              label: `Aucun`,
              answer: 'ni jardinage, ni bricolage, ni ménage, ni sport',
            },
          ]}
          answers={hobbies}
          setAnswers={setHobbies}
          label={['Je fais du ', 'Je ne fait ']}
        />
      ) : null}
      {vulnerabilities.length && hobbies.length ? (
        <Step
          options={[
            {
              value: 'wood',
              label: `Une cheminée ou poêle à bois`,
            },
            {
              value: 'gaz',
              label: `Une chaudière au gaz ou au fioul`,
            },
            {
              value: 'mobile',
              label: `Un chauffage mobile d'appoint`,
            },
            {
              value: 'none',
              label: `Autrement / Je ne sais pas`,
              answer: `Autrement`,
            },
          ]}
          answers={heating}
          setAnswers={setHeating}
          label={['Je me chauffe avec ', 'Je me chauffe ']}
        />
      ) : null}
      {vulnerabilities.length && hobbies.length && heating.length ? (
        <Step
          options={[
            {
              value: 'bicycle',
              label: `À vélo`,
            },
            {
              value: 'public',
              label: 'En transport en commun',
            },
            {
              value: 'car',
              label: `En voiture`,
            },
            {
              value: 'none',
              label: `Autrement`,
              answer: `ni à vélo, ni en transport en commun, ni en voiture`,
            },
          ]}
          answers={transportations}
          setAnswers={setTransportations}
          label={['Je me déplace ', 'Je ne me déplace ']}
        />
      ) : null}
      {vulnerabilities.length &&
      hobbies.length &&
      heating.length &&
      transportations.length ? (
        <Step
          options={[
            {
              value: 'cat',
              label: `Un chat`,
            },
            {
              value: 'dog',
              label: 'Un chien',
            },
            {
              value: 'none',
              label: `Aucun des deux`,
              answer: 'de chien ou de chat',
            },
          ]}
          answers={pets}
          setAnswers={setPets}
          label={[`J'ai `, `Je n'ai pas `]}
        />
      ) : null}
    </>
  )
}
