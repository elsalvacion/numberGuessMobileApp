import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../utils/Colors'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess A Number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.pink,
    color: Colors.lightGrey,
    
  },
  title: {
    color: Colors.lightGrey,
    fontSize: 28,
    marginTop: 20,
    fontFamily: "RobotoLight"
  }
})
export default AppBar

