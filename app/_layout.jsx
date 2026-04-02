import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
 

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  
  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="index" options={{title:'Home'}} />
        <Stack.Screen name="about" options={{title:'About'}} />
        <Stack.Screen name="contact" options={{title:'Contact Us'}} />


        <Stack.Screen name="(auth)" options={{headerShown:false}} />       
        <Stack.Screen name="(dashboard)" options={{headerShown:false}} />    
      </Stack>
     </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})