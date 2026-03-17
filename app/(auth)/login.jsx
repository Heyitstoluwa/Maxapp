import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'  
import { Colors } from '../../constants/Colors'
import { useState } from 'react'


//themed compomemts 
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInputs from '../../components/ThemedTextInputs'




const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login form Submitted Successfully', email, password);
  }



  
  return (
    <ThemedView style={styles.container}>
        <Spacer /> 
      <ThemedText style={styles.title} title={true} >
        Login to your Account  
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
          keyboardType="default" 
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        
      />   
                                                                                                                                                                                                                                                                      
     <ThemedButton
        onPress={handleSubmit}   
        style= {({pressed}) => [styles.btn, pressed && styles.pressed]}>
        <Text style = {{color: 'white'}}> Login Here</Text>
    </ThemedButton>

      <Spacer height={100} />

      <Link href="/register"> <ThemedText style = {{textAlign: 'center'}}>Register</ThemedText>
      </Link> 
    </ThemedView>       
      
       
 

  )   



  
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  title: {
    textAlign: 'center',
    fontSize: 18  ,
    marginBottom: 30,
  }, 
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,

  },
  pressed: {
    opacity: 0.7,
  }
  
})