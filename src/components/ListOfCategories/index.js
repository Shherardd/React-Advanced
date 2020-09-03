import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await window.fetch('https://bet-server.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return { categories, loading }
}
export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()
  useEffect(function () {
    const onScroll = e => {
      console.log('scrolled')
      const newShowFixed = window.scrollY > 220
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) =>
    <List fixed={fixed} fadeOut={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  if (loading) {
    return 'cargando...'
  }
  return (
    <>
      {renderList()}
      {renderList(showFixed)}
    </>
  )
}
