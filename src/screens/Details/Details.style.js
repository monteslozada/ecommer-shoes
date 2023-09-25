
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  
  image: {
    height: '40%',
    width: '60%',
    resizeMode: 'contain',
  
justifyContent: 'center',

    
  },
  title: {
    fontSize: 30,
    marginVertical: 15,
    textAlign:'center'
 
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign:'center',
  },
  descripcion:{
    fontSize:20,
    textAlign: 'center',
  }
})