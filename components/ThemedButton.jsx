import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

function ThemedButton({ style, ...props }) {
  return (
    <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed, style]} {...props} />
      
    
  )
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 12,
    marginVertical: 0,
  },
  btnPressed: {
    opacity: 0.7,
  }
})
export default ThemedButton