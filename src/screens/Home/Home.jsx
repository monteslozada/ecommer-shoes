import React from 'react'

import { CategoryItem } from './components'
import { Header } from '../../componentes'
import { View, FlatList, ImageBackground } from 'react-native'
import styles from './Home.style'
import Counter from '../../componentes/Counter'
import {  useGetCategoriesQuery } from '../../services/shopApi'

const Home = ({ navigation }) => {
        const imagen = { uri: 'https://media.istockphoto.com/id/1408312404/es/foto/teclado-volador-auriculares-y-controlador-de-juego-renderizado-3d-dispositivos-de-juego-sobre.jpg?s=612x612&w=0&k=20&c=gKBmPdlDfMZ0LAuLgV4aGl-SCqa2KteXGT1rHRM6aVU=' }
        
        const {data, isLoading} = useGetCategoriesQuery()        
        return (
                <ImageBackground source={imagen} resizeMode={'cover'} style={styles.imagen}>               
                <View style={styles.container}>
                <Counter/> 
                <Header title={'Categories'} />
                {!isLoading && (
                <FlatList
                data={data}
                keyExtractor={category => category}
                renderItem={({ item }) => (
                <CategoryItem
                category={item}
                navigation={navigation}
                />
                )}
                />
                )}
                </View>
                </ImageBackground>
        )
}

export default Home