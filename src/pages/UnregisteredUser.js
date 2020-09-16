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
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  return <UserForm onSubmit={onSubmit} title='Registrarse' />
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
