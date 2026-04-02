import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from '@expo/vector-icons';






const dasboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light



  return (
   <Tabs screenOptions={{
    headerShown : false,
    tabBarStyle : {
      paddingTop: 15,
      height :50,
      
    },
    tabBarActiveTintColor : theme.IconColorFocused,
    tabBarInactiveBackgroundColor : theme.IconColor,
    
   }}
  >
    <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({ focused }) => 
      <Ionicons 
      name = {focused ? "person" : "person-outline"} size={20} color={focused ? theme.IconColorFocused : theme.IconColor} />}} />
      

    <Tabs screen name="settings" options= {{title : "Settings", tabBaricon: {{focused}} => 
   </Tabs>

   
  )
}

export default dashboardLayout

const styles = StyleSheet.create({})