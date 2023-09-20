import { FlatList, Pressable, Text, View} from 'react-native'
import React from 'react'
import styles from './Cart.styles'
import Cart from '../../data/Cart'
import CartItem from './Components/CartItem'


const cart = () => {

  const renderItem = () => <CartItem/>
  
  return (
    <View style={ styles.container}>
      <View>
       <FlatList data={Cart} 
       keyExtractor={item => item.id} 
       renderItem={renderItem}/>
        </View>
        <View>
          <Pressable>
            <Text>
              confirmar
            </Text>
            <View>
              <Text>{`Total $100`} </Text>
            </View>
          </Pressable>
        </View>   
    </View>
  )
}

export default  cart

