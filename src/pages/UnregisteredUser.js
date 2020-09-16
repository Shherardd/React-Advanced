import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutations'

export const UnregisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth).catch((e) => { console.log('Ooops! ') })
                  }
                  const errorMsg = error && 'El Usuario ya existe o hay algun problema.'
                  return <UserForm disabled={loading} onSubmit={onSubmit} title='Registrarse' error={errorMsg} />
                }
              }

            </RegisterMutation>
            <UserForm title='Iniciar Sesion' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
