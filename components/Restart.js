import React from 'react'
import { Button, StyleSheet,  View } from 'react-native'
import Colors from '../utils/Colors'

const Restart = (props) => {
  return (
    <View style={styles.container}>
      <Button color={Colors.green} onPress={props.restartHandler} title="RESTART" />
    </View>
  )
}

export default Restart

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    marginVertical: 10,
    // flex: 1
  }
  ,
  card: {
    alignItems: "center",
    marginVertical: 10,

  },
})
