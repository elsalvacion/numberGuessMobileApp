import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
  return (
    <View {...props.style} style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: "80%",
    elevation: 1,
    alignItems: "center",
    padding: 15,
    borderColor: "black"
  }
})

export default Card

