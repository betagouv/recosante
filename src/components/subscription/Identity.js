import React, { useState } from 'react'
import styled from 'styled-components'

import useUser from 'hooks/useUser'
import TextInput from 'src/components/base/TextInput'
import SearchBar from 'src/components/search/SearchBar'
import NavigationIdentity from './identity/NavigationIdentity'

const Wrapper = styled.div`
  padding-top: 2rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 3rem;
  font-weight: 300;
  text-align: center;
`

const SearchBarWrapper = styled.div`
  position: relative;
  width: 22.25rem;
  height: 3rem;
  margin: 0 auto 3rem;
`
const StyledSearchBar = styled(SearchBar)`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  font-size: 1.25rem;
`
const MailInput = styled(TextInput)`
  display: block;
  width: 22.25rem;
  margin: 0 auto 4rem;
  font-size: 1.25rem;
`
export default function Identity(props) {
  const { user, mutateUser } = useUser()

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
            console.log(user)
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
        <NavigationIdentity setPreviousStep={props.setPreviousStep} />
      </form>
    </Wrapper>
  )
}
