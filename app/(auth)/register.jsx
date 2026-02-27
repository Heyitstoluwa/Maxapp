import { StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'  
import { Colors } from "../../constants/Colors"

//themed compomemts 
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'



const Register = () => {
  const handleSubmit = () => {
    // Handle registration logic here
    console.log('Register button pressed');
  } 

  
  return (
    <ThemedView style={styles.container}>
        <Spacer /> 
      <ThemedText style={styles.title} title={true} >
        Register for an Account  
      </ThemedText> 

        <ThemedButton
        onPress={handleSubmit}>
         <Text style = {{color: '#f2f2f2'}}> Register</Text>
          
        </ThemedButton>   

      <Spacer height={100} />

      <Link href="/login"> <ThemedText style = {{textAlign: 'center'}}>Login</ThemedText>
      </Link> 
  
    </ThemedView>       
      
      
   )   

 
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  }, 
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,

  },

  pressed: {
    opacity:0.7,

  }
  
})