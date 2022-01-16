import React from "react";

import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

function GoalInput(props) {
  return (
    <Modal
      style={{ backgroundColor: "#f1faee" }}
      visible={props.isModalVisible}
      animationType="fade"
    >
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={props.onChange}
          value={props.value}
          // placeHolder={props.placeHolderString}
          placeholder="Course goal"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={props.onPress}
              disabled={props.value ? false : true}
              color={props.color}
              title={props.title}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={props.onCancleInput}
              title="CANCLE"
              color="#e63946"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 24,
    padding: 10,
    marginBottom: 8,
    width: "75 %",
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
