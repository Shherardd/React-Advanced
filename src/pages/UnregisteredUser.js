import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const UnregisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (<UserForm onSubmit={activateAuth} />)
      }
    }
  </Context.Consumer>
)
