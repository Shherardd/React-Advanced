import React from 'react'
import { Category } from '../Category'
import { Lista, Item } from './styles'
export const ListOfCategories = () => {
  return (
    <Lista>
      {
        [1, 2, 3, 4, 5, 6, 7].map(category => <Item key={category}><Category /></Item>)
      }
    </Lista>
  )
}
