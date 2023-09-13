import { StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"


export default styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'90%',
        paddingTop: 10,
    },
     input:{ 
        color:'balck',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        width:'80%',
        fontSize:20,
    },
})