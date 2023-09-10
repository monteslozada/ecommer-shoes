import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../componentes/Header'

const CategoriesList = ({category}) => {
  return (
    <>
    <Header title={category}/>
   <View styles={ styles.container}>
    <Text> Categoties List </Text>
   </View>
    </>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
})