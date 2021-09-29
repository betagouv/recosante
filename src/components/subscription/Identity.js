import React, { useState } from 'react'
import styled from 'styled-components'

import { useLocalUser, useUserMutation } from 'hooks/useUser'
import TextInput from 'src/components/base/TextInput'
import SearchBar from 'src/components/search/SearchBar'
import NavigationIdentity from './identity/NavigationIdentity'
import Error from './identity/Error'
import Success from './identity/Success'

const Wrapper = styled.div`
  padding-top: 2rem;

  ${(props) => props.theme.mq.small} {
    padding-top: 1.5rem;
  }
`
const Label = styled.label`
  display: block;
  margin-bottom: 3rem;
  font-weight: 300;
  text-align: center;

  ${(props) => props.theme.mq.smallish} {
    margin-bottom: 6rem;
  }
`

const SearchBarWrapper = styled.div`
  position: relative;
  width: 22.25rem;
  height: 3rem;
  margin: 0 auto 3rem;

  ${(props) => props.theme.mq.smallish} {
    margin-bottom: 6rem;
  }
  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
const StyledSearchBar = styled(SearchBar)`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transform: none !important;
  font-size: 1.25rem;
  ${(props) => props.error && `border-color: ${props.theme.colors.error}`}
`
const MailInput = styled(TextInput)`
  display: block;
  width: 22.25rem;
  margin: 0 auto 5.5rem;
  font-size: 1.25rem;

  ${(props) => props.theme.mq.smallish} {
    margin-bottom: 7rem;
  }
  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
export default function Identity(props) {
  const { user, mutateUser } = useLocalUser()

  const mutation = useUserMutation()

  const [error, setError] = useState(false)

  return (
    <Wrapper>
      <Label>Je valide mes informations personnelles.</Label>
      <SearchBarWrapper>
        <StyledSearchBar
          initialValue={user.commune && user.commune.nom}
          handlePlaceSelection={(place) => {
            mutateUser({ commune: place })
          }}
          error={error && !user.commune}
        />
      </SearchBarWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!user.commune) {
            setError(true)
          } else {
            setError(false)
            console.log(JSON.stringify(user))
            mutation.mutate(user)
          }
        }}
      >
        <MailInput
          type='email'
          name='email'
          placeholder='Entrez votre email'
          value={user.mail}
          onChange={({ value }) => mutateUser({ mail: value })}
          required
        />
        <NavigationIdentity
          setPreviousStep={props.setPreviousStep}
          fetching={mutation.isLoading}
        />
      </form>
      <Error error={mutation.error} reset={mutation.reset} />
      <Success data={mutation.data} />
    </Wrapper>
  )
}
