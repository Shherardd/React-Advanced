import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input type='email' placeholder='email' value={email.value} onChange={email.onChange} />
      <input type='password' placeholder='password' {...password} />
      <button>Iniciar sesion</button>
    </form>
  )
}
