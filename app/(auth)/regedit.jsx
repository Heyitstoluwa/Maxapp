import { StyleSheet, Text, Pressable, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'  
import { Colors } from "../../constants/Colors"

//themed compomemts 
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'


const regedit = () => {
  return (
    
    <ThemedView style={styles.container}>
         

       <ThemedText style={styles.title} title={true}>  Register your Account  </ThemedText>
          <Pressable style= {({pressed}) => [styles.btn, pressed && styles.btnPressed]} >        

            <Text style = {[styles.text, Colors.primary]}>Login here</Text>
            </Pressable>


    </ThemedView>
  )
}

export default regedit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'light',
        textAlign: 'center',
        marginBottom: 30,
    },
    text: {
        justifyContent: 'center',
        alignContent: 'center',
        color: '#f2f2f2',
        textAlign: 'center',
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        alignSelf: 'center',
    },
    btnPressed: {
        opacity: 0.7,
    },
})