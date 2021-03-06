import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutations'
import { LoginMutation } from '../container/LoginMutation'

export const UnregisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              }
              ).catch((e) => { console.log('Ooops! ') })
            }
            const errorMsg = error && 'El Usuario ya existe o hay algun problema.'
            return <UserForm disabled={loading} onSubmit={onSubmit} title='Registrarse' error={errorMsg} />
          }
        }

      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              }).catch((e) => { console.log('Ooops! ') })
            }
            const errorMsg = error && 'La contrasena no es correcta o el usuario no existe'
            return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesion' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}
