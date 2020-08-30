import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'
const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </>
)

export default App
