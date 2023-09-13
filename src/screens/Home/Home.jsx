import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './components'
import { Header } from '../../componentes'
import { View, FlatList } from 'react-native'
import styles from './Home.style'

// const Home = ({setCategorySelected}) => {
//   return (
//     <View style={ styles.container}>
//       <Header title={'Categories'}/>
//           <FlatList
//           data={dataCategories}
//           keyExtractor={category => category}
//           renderItem={({item}) => (
//           <CategoryItem 
//           category={item} 
//           setCategorySelected={setCategorySelected}
//           />
//   )}
//           />
//           </View>
//   )
// }

// export default Home

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title={'Categories'} />
      <FlatList
        data={dataCategories}
        keyExtractor={category => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            setCategorySelected={setCategorySelected}
          />
        )}
      />
    </View>
  )
}

export default Home



