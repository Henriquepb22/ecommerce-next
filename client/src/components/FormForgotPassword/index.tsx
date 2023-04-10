import { useState } from 'react'
import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { FormWrapper, FormLoading, FormError } from 'components/Form'
import { FieldErrors } from 'utils/validations'
import TextField from 'components/TextField'
import Button from 'components/Button'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<
    Omit<UsersPermissionsRegisterInput, 'username' | 'password'>
  >({
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)
    setFormError('username or password is invalid')
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(value) => handleInput('email', value)}
          error={fieldError?.email}
          icon={<Email />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
