import { StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'  
import { Colors } from '../../constants/Colors'


//themed compomemts 
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'



const login = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer /> 
      <ThemedText style={styles.title} title={true} >
        Login to your Account  
      </ThemedText>    

     <Pressable style= {({pressed}) => [styles.btn, pressed && styles.btnPressed]}>
      <Text style = {{color: 'white'}}> Login Here</Text>

        

      </Pressable>
    

      <Spacer height={100} />

      <Link href="/register"> <ThemedText style = {{textAlign: 'center'}}>Register</ThemedText>
      </Link> 
    </ThemedView>       
      
      
 

  )   



  
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  }, 
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,

  },
  btnPressed: {
    opacity: 0.7,
  }
  
})