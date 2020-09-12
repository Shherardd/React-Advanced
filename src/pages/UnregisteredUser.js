import React from 'react'
import Context from '../Context'

export const UnregisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesion</button>
          </form>)
      }
    }
  </Context.Consumer>
)
