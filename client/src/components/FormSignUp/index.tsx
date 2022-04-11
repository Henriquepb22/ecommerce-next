import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

const FormSignUp = () => {
  const [createUser] = useMutation(MUTATION_REGISTER)
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    password: '',
    email: ''
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          password: values.password,
          email: values.email
        }
      }
    })
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={(v) => handleInput('confirm-password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          Sign up now
        </Button>

        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
