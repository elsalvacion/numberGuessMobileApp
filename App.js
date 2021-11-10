import React, { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
} from "react-native";
import Input from "./components/Input";
import AppBar from "./components/layout/AppBar";
import Message from "./components/Message";
import Restart from "./components/Restart";
import { useFonts } from "expo-font";

export default function App() {
  const [value, setValue] = useState("");
  const [rnd, setRnd] = useState();
  const [alert, setAlert] = useState({
    type: null,
    msg: null,
  });

  useEffect(() => {
    setRnd(Number(generateRnd()));
  }, []);

  const [loaded] = useFonts({
    Roboto: require("./assets/Roboto/Roboto-Black.ttf"),
    RobotoBold: require("./assets/Roboto/Roboto-Bold.ttf"),
    RobotoLight: require("./assets/Roboto/Roboto-Light.ttf"),
  });

  const generateRnd = () => {
    const random = Math.floor(Math.random() * (1000 - 1) + 1);
    return random;
  };

  const msg = {
    lower: "Wrong Guess. Choose Lower",
    higher: "Wrong Guess. Choose Higher",
    win: "You Win",
    lose: "You Lose",
  };

  const handleInputChange = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const restartHandler = () => {
    setRnd(generateRnd());
    setAlert({
      type: null,
      msg: null,
    });
  };
  const handleGuess = () => {
    console.log(rnd);
    setValue("");
    const selectedNumber = Number(value);
    // console.log(rnd);
    // console.log(selectedNumber);

    if (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > 1000) {
      setAlert({
        type: "error",
        msg: "Use a valid number",
      });
    } else if (selectedNumber < rnd) {
      setAlert({
        type: "error",
        msg: "Try a higher number",
      });
    } else if (selectedNumber > rnd) {
      setAlert({
        type: "error",
        msg: "Try a lower number",
      });
    } else {
      Keyboard.dismiss();

      setAlert({
        type: "success",
        msg: "Congradulation you won",
      });

      Alert.alert("Congraduations", "You Won. Press replay to play again.", [
        {
          style: "cancel",
          text: "CLOSE",
        },
        {
          style: "default",
          text: "REPLAY",
          onPress: () => restartHandler(),
        },
      ]);
    }
  };

  if (!loaded)
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading Fonts</Text>
      </View>
    );
  else {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <AppBar />
          {alert.type && <Message alert={alert} />}
          <Input
            value={value}
            handleGuess={handleGuess}
            handleInputChange={handleInputChange}
          />

          {alert.type === "success" && (
            <Restart restartHandler={restartHandler} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: "Roboto",
    fontSize: 18,
  },
});
