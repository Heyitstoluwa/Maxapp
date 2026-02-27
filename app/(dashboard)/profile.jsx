import { StyleSheet } from 'react-native'
import React from 'react'


import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'



const profile = () => {
  return (
    <ThemedView style={ styles.container}>
      <ThemedText style={styles.heading} title={true}>Your Email</ThemedText>
        <Spacer />
      <ThemedText style={styles.subtitle}>Readers are Leaders</ThemedText>
    </ThemedView>
  )
}

export default profile

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
    subtitle: {
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'normal'
    },
})