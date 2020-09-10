import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
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
    </>
  )
}

export default App
