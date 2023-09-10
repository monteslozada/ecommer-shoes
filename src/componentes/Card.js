import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ Children, style }) => {
  return <View style={[styles.container, style]}>{Children}</View>
  
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        shadowColor:'#000',
        ShadowOffset: { height: 5, width:3 },
        elevation: 10,
        shadowOpacity:1,
        shadowRadius: 1,
    }
})