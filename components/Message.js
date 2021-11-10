import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/Colors";
import Card from "./layout/Card";

const Message = (props) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text
          style={props.alert.type === "error" ? styles.error : styles.success}
        >
          {props.alert.msg}
        </Text>

        {props.alert.type === "success" && (
          <Image
            source={require("../assets/win.gif")}
            resizeMode="cover"
            resizeMethod="resize"
            style={styles.image}
          />
        )}
      </Card>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 16,
    color: Colors.red,
    fontFamily: "RobotoBold",
  },
  success: {
    fontSize: 16,
    color: Colors.green,
    fontFamily: "RobotoBold",
  },
  image: {
    width: 300,
    height: 50,
    maxWidth: "80%",
  },
});
