import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await window.fetch('https://bet-server.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchData()
  }, [])

  const renderList = (fixed) =>
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>

  return (
    <>
      {renderList()}
      {renderList(true)}
    </>
  )
}
