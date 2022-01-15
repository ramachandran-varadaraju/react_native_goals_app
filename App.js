import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoalHandler = () => {
    setGoals((prevState) => {
      return [
        { key: Math.random().toString(), goal: enteredGoal },
        ...prevState,
      ];
    });
    // setEnteredGoal("");
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        onChange={goalInputHandler}
        value={enteredGoal}
        placeHolderString="Course goal"
        onPress={addGoalHandler}
        title="ADD"
        color="#1d3557"
      />
      <FlatList
        style={styles.listItems}
        data={goals}
        renderItem={(itemData) => <GoalItem itemData={itemData} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 80,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 32,
    backgroundColor: "#f1faee",
    height: "100%",
  },
  listItems: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
