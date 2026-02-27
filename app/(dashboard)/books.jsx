import { StyleSheet } from 'react-native'
import React from 'react'


import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'



const books = () => {
  return (
    <ThemedView style={ styles.container}>
      <ThemedText style={styles.heading} title={true}>Add a New Book</ThemedText>
    <Spacer />
    
    </ThemedView>
  )
}

export default books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
})