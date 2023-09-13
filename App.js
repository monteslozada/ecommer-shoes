import { useState } from 'react'
import { Home, Products } from './src/screens'

export default function App() {
  useState[ categorySelected, setCategorySelected] = useState('')
  
  return categorySelected ? (
  <Products category={categorySelected} />
  ): (
  <Home setCategorySelected={setCategorySelected}/>
  )
}