import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='email' value={email.value} onChange={email.onChange} />
        <Input type='password' placeholder='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
