import React from "react";

import { TextInput, StyleSheet, View, Button } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={props.onChange}
        value={props.value}
        placeHolder={props.placeHolderString}
        // placeholder="Course goal"
        style={styles.input}
      />
      <Button onPress={props.onPress} color={props.color} title={props.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 24,
    padding: 10,
    width: "75 %",
  },
});

export default GoalInput;
