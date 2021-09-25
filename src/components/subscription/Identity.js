import React from 'react'
import styled from 'styled-components'

import useUser from 'hooks/useUser'
import TextInput from 'src/components/base/TextInput'
import Alert from 'src/components/base/Alert'
import SearchBar from 'src/components/search/SearchBar'
import NavigationIdentity from './identity/NavigationIdentity'

const Wrapper = styled.form`
  padding-top: 2rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 3rem;
  font-weight: 300;
  text-align: center;
`
const InputsWrapper = styled.div`
  width: 22.25rem;
  margin: 0 auto 4rem;
`
const SearchBarWrapper = styled.div`
  position: relative;
  height: 3rem;
  margin-bottom: 3rem;
`
const StyledSearchBar = styled(SearchBar)`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  font-size: 1.25rem;
`
const MailInput = styled(TextInput)`
  margin: 0;
  font-size: 1.25rem;
`
export default function Identity(props) {
  const { user, mutateUser } = useUser()

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        console.log(user)
      }}
    >
      <Label>Je valide mes informations personnelles.</Label>
      <InputsWrapper>
        <SearchBarWrapper>
          <StyledSearchBar
            initialValue={user.commune && user.commune.nom}
            handlePlaceSelection={(place) => {
              mutateUser({ commune: place })
            }}
            required
          />
        </SearchBarWrapper>
        <MailInput
          type='email'
          name='email'
          placeholder='Votre email'
          value={user.mail}
          onChange={({ value }) => mutateUser({ mail: value })}
          required
        />
      </InputsWrapper>
      <NavigationIdentity setPreviousStep={props.setPreviousStep} />
    </Wrapper>
  )
}
