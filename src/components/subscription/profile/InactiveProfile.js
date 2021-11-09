import React from 'react'

import { useUserReactivation } from 'hooks/useUser'
import Button from 'components/base/Button'

export default function InactiveProfile() {
  const mutation = useUserReactivation()

  return (
    <div>
      <p>
        Votre profil est désactivé. Vous pouvez le réactiver en cliquant ici.
      </p>

      <Button onClick={() => mutation.mutate()}>Réactiver mon profil</Button>
    </div>
  )
}
