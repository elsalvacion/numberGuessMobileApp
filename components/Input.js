import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../utils/Colors'
import Card from './layout/Card'

const Input = (props) => {

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.label}>Enter a guess (1 - 1000)</Text>
        <TextInput style={styles.inputField} autoComplete="off" maxLength={4} keyboardType="number-pad"
        blurOnSubmit={true}
        onChangeText={props.handleInputChange}
        value={props.value}
        />
        <View style={styles.btnContainer}>
          <Button title="Guess" color={Colors.blueGrey} onPress={props.handleGuess} />
        </View>

      </Card>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    marginVertical: 10
  },
  label: {
    fontSize: 20,
    fontFamily: "RobotoBold",
    marginTop: 7
  },
  inputField: {
    borderBottomColor: Colors.pink,
    borderBottomWidth: 1,
    width: 50,
    fontSize: 18,
    textAlign: "center"
    , marginVertical: 10
  },
  btnContainer: {
    width: 100
  }
})
