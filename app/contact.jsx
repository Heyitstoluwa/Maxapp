import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"


// Theme imports
//themed compomemts
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'



const contact = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light 



  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText style = {styles.title}>Contact Page</ThemedText>
      <Link href="/" style={styles.link}><ThemedText>Back Home</ThemedText></Link>
    </ThemedView>
  )
}

export default contact

const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    
    },
    link: {
      marginVertical: 10,
      borderBottomWidth: 1,
      
     
    },
})  