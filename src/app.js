import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </>
)

export default App
