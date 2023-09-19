import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import { Header, SearchInput } from '../../componentes'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/Products'
import styles from './Products.style'

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrProducts] = useState([])
  const [keyword, setKeyword] = useState('')
const { category }= route.params
  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        product => product.category === category
      )
      const productsFiltered = products.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    }
  }, [category, keyword])
 
  return (
   
    // <View style={styles.container}>
       
    //   <Header title={category} />
    
    //   <SearchInput onSearch={setKeyword} />
    //   <View style={styles.listContainer}>
     
    //     <FlatList
    //       data={arrProducts}
    //       renderItem={({ item }) => (
    //         <TouchableOpacity onPress={() => navigation.navigate('Details', {product: item})}>

    //           <View style={styles.card}>
    //           <Image style={styles.image} source={{ uri:item.thumbnail[0]  }}/>
    //           <Text>{item.title}</Text>
    //           </View>
            
    //         </TouchableOpacity>
    //       )}
    //       keyExtractor={item => item.id}
    //     />
       
    //   </View>
     
    // </View>
   
    <View style={styles.container}> 

    <Header title={category.toUpperCase()} /> 

    <SearchInput onSearch={setKeyword} />     

      <FlatList 
        data={arrProducts} 
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


    </View> 
  
  )
}

export default Products