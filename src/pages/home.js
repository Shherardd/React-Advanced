import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ od }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={od} />
    </>
  )
}
