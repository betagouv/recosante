import React, { useContext } from 'react'

import ProfileContext from 'src/utils/ProfileContext'
import Alert from 'src/components/base/Alert'
import Button from 'src/components/base/Button'
import Form from './formApi/Form'

export default function FormApi() {
  const { error } = useContext(ProfileContext)

  return error ? (
    <Alert error>
      <p>
        <strong>Une erreur est survenue</strong>
        <br />({error.message})
      </p>
      <Button to='/'>Retour à l'accueil</Button>
    </Alert>
  ) : (
    <Form />
  )
}
