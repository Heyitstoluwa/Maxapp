import { StyleSheet } from 'react-native'
import React from 'react'


import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'



const create = () => {
  return (
    <ThemedView style={ styles.container}>
      <ThemedText style={styles.heading} title={true}>Your Reading List</ThemedText>
        
    </ThemedView>
  )
}

export default create

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