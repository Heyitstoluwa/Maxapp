import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'


//themed compomemts
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    
    <ThemedView style={styles.container}>
      <StatusBar value="auto" />
      <ThemedLogo style={styles.img} />
      <ThemedText style={styles.title} title={true}>Number 1 HealthApp</ThemedText>
      

     <Spacer height={12}/>
      <ThemedText>Welcome to Maxapp!</ThemedText>
      

      
      <Link href="/about" style={styles.link}>
        <ThemedText>About Us</ThemedText></Link>
    
      
      <Link href="/contact" style={styles.link}>
      <ThemedText>Contact Us</ThemedText></Link>


      <Link href="/login" style={styles.link}>
      <ThemedText>Login</ThemedText></Link>


      <Link href="/register" style={styles.link}>
      <ThemedText>Register</ThemedText></Link>
    
      <Link href="/profile" style={styles.link}>
      <ThemedText>Profile</ThemedText></Link>
    
      <Link href="/create" style={styles.link}>
      <ThemedText>Create</ThemedText></Link>
    
      <Link href="/books" style={styles.link}>
      <ThemedText>Books</ThemedText></Link>
    
    
    
    </ThemedView>
    

    
  )
}

export default Home

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

    img: {
      marginVertical: 5,
      height: 120,
      width: 120,
      resizeMode: 'contain',
    },
    link: {
      marginVertical: 5,
      borderBottomWidth: 1,
    }
    

})