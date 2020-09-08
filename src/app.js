import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { Home } from './pages/home'
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  // console.log(window.location.search)  --> empty string if there isnt qury into searchbar
  // console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Home />
      }
    </>
  )
}

export default App
