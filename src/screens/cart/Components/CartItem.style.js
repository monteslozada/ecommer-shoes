import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/colors'



export default styles = StyleSheet.create({
    
    container:{
        flex:1 ,
        padding: 8,
        borderBottomWidth:1,
     
    },
    
    name :{
        fontSize: 18,

    },
    details:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }
    
})