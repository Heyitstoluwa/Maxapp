import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

function ThemedButton({ style, ...props }) {
  return (
    <Pressable style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]} {...props} />
      
    
  )
}

export default ThemedButton

const styles = StyleSheet.create({})