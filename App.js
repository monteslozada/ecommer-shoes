import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './src/navegation/StackNavegation'
// import { useFonts } from 'expo-font'
// import fonts from './src/global/fonts'
import BottomTabNavigator from "./src/navegation/BottomTabNavigator";
export default function App() {
  // const [fontsLoaded] = useFonts(fonts)
  // if(!fontsLoaded){
  //   return null
  // }
  
  return (  <NavigationContainer>
  <BottomTabNavigator/>
  </NavigationContainer>
  )
}