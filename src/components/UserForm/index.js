import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ error, onSubmit, title, disabled }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: email.value })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input type='email' placeholder='email' value={email.value} onChange={email.onChange} disabled={disabled} />
        <Input type='password' placeholder='password' {...password} disabled={disabled} />
        <Button>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
