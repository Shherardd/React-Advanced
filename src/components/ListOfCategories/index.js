import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await window.fetch('https://bet-server.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchData()
  }, [])

  useEffect(function () {
    const onScroll = e => {
      console.log('scrolled')
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) =>
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
