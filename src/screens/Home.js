import { StyleSheet } from 'react-native'
import React from 'react'
import  Header  from '../componentes/Header'
import Categories from '../componentes/Categories'

const Home = () => {
  return (
<>
<Header title={'Home'}/>
<Categories/>
</>
  )
}

export default Home

const styles = StyleSheet.create({})