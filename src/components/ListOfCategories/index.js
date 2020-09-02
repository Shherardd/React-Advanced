import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)

  useEffect(() => {
    const fetchData = async () => {
      const response = await window.fetch('https://bet-server.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchData()
  })

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
