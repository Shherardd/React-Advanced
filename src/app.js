import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { UnregisteredUser } from './pages/UnregisteredUser'
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log(window.location.search)  --> empty string if there isnt qury into searchbar
  // console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:od' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <UnregisteredUser path='/favs' />
                <UnregisteredUser path='/user' />
              </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  )
}

export default App
