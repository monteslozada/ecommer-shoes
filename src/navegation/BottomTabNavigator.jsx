import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import StackNavigator from "./StackNavegation";
import { StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather'
import { colors } from "../constants/colors";
import OrdersNvigator from "./OdersNavigator";
const BottomTab = createBottomTabNavigator()

 function BottomTabNavigator () {
    return <BottomTab.Navigator 
    initialRouteName="shop" 
    screenOptions={{
        headerShown: false , 
        tabBarShowLabel: false, 
        tabBarStyle:styles.tabBar }}>

        <BottomTab.Screen name="shop" component={StackNavigator} options={{
            tabBarIcon: ({ focused }) =>  (
                    <Feather name='shopping-bag'size={24} color={ focused ? colors.secundary: 'white'}/>
                ),
           
        }}

        />
  <BottomTab.Screen name="OrdersNav" component={OrdersNvigator} options={{
            tabBarIcon: ({ focused }) =>  (
                    <Feather 
                    name='list'size={24} 
                    color={ focused ? colors.secundary: 'white'}
                    />
            ),
        }}/>
        <BottomTab.Screen name="Cartnav" component={CartNavigator} options={{
            tabBarIcon: ({ focused }) =>  (
                    <Feather 
                    name='shopping-cart'size={24} 
                    color={ focused ? colors.secundary: 'white'}
                    />
            ),
        }}/>
       
        </BottomTab.Navigator>


 }
 export default BottomTabNavigator


const styles = StyleSheet.create({

    tabBar:{
       
        backgroundColor: '#131627',
        // borderTopRightRadius: 25,
        // borderTopLeftRadius: 25,
    },
    
})