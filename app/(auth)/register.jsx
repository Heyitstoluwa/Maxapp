import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'  
import { Colors } from "../../constants/Colors"
import { useState } from 'react'
import { Alert } from 'react-native'

//themed compomemts 
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInputs from '../../components/ThemedTextInputs'


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


  const handleSubmit = () => {
    // Handle registration logic here
    console.log('Register button pressed', email, ",", password);

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      console.log('Error', 'Passwords do not match');
      return;
    }
    console.log ({Alert})
  } 

  
  return (
    <ThemedView style={styles.container}>
        <Spacer /> 
      <ThemedText style={styles.title} title={true} >
        Register for an Account  
      </ThemedText> 
    <ThemedTextInputs style = 
        {{
          width: '90%', 
          marginBottom: 20, 
          height: 50
          
        }} 
          placeholder="Enter your Email"  
          keyboardType="email-address" 
          onChangeText={setEmail}
          value={email}
          
      />   
              
      <ThemedTextInputs style = 
      {{
          width: '90%', 
          marginBottom: 20, 
          height: 50
          
        }} 
          placeholder="Enter your Password"  
          keyboardType="password" 
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        
      /> 

      <ThemedTextInputs style = 
      {{
          width: '90%', 
          marginBottom: 20, 
          height: 50
          
        }} 
          placeholder="Confirm your Password"  
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        
      /> 

      

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