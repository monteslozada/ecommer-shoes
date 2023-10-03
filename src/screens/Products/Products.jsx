import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import { Header, SearchInput } from '../../componentes'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/Products'
import styles from './Products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'


const Products = ({ navigation }) => {
  const category = useSelector(state => state.shop.categorySelected)  
  const [keyword, setKeyword] = useState('')
  const {data, isLoading} = useGetProductsByCategoryQuery(category)

  // useEffect(() => {
  //   console.log(data)
  //   if (data) {
      
  //     const productsFiltered = data.filter(product =>
  //       product.title.includes(keyword)
  //     )
  //   }
  // }, [])
 
  return (
    <View style={styles.container}> 
    <Header title={category.toUpperCase()} /> 
    <SearchInput onSearch={setKeyword} />     
    {!isLoading && (
    <FlatList 
        data={Object.values(data)} 
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => navigation.navigate("Details", { product: item })}> 
            <View style={{ flexDirection: "row-reverse", marginVertical: 20 }}> 
              <Text style={styles.text}> 
                {item.title} 
              </Text> 
              <Image  style={styles.image}source={{ uri: item.thumbnail }}/> 
            </View> 
          </TouchableOpacity>)}
          
        keyExtractor={(item) => item.id} 
      /> 
    )}     
    </View>   
  )
}

export default Products