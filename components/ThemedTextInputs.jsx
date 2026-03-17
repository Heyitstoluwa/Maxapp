import { TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInputs = ({style,...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <TextInput style = {[
        {
            backgroundColor: theme.uiBackground,
            color: theme.text,
            padding: 10,
            borderRadius: 8,
            
        }
    , style
    ]}
    {...props}
    />
    
  )
}

export default ThemedTextInputs
