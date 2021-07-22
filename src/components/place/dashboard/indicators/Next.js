import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'
import Card from 'src/components/misc/Card'

const Title = styled.h2``
const Text = styled.p``
export default function Next() {
  return (
    <Card columns={4}>
      <Card.Content>
        <Title>
          Bientôt
          <br />
          de nouveaux
          <br />
          <strong>
            indicateurs
            <span
              dangerouslySetInnerHTML={{
                __html: '&#8239;',
              }}
            />
            !
          </strong>
        </Title>
        <Text>
          Votez pour ceux que vous souhaitez voir apparaitre, et soyez prévenu·e
          dès qu’ils seront ajoutés.
        </Text>
        <Button>Je vote !</Button>
      </Card.Content>
    </Card>
  )
}
