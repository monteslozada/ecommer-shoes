import {  Text, Image, View } from 'react-native'
import React from 'react'
import { Header } from '../../componentes'
import styles from './Details.style'


const Details = ({route}) => {
  const {product}= route.params
  return (
    <View style={styles.container}>
<Header title={'Detalle'}/>
<View style={styles.carDetail}>
<Image style={styles.image} source={{ uri: product.images[0]  }}/>
<Text style={styles.title}>{product.title}</Text>
<Text style={ styles.descripcion}>{product.description}</Text>
<Text  style={styles.price}>{`$ ${product.price}`}</Text>
</View>
    </View>  
  )
  
}


export default Details

