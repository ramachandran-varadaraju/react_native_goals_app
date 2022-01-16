import React, { useState } from "react";

import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = () => {
    setGoals((prevState) => {
      return [
        { id: Math.random().toString(), goal: enteredGoal },
        ...prevState,
      ];
    });
    setIsAddMode(false);
    setEnteredGoal("");
  };

  const removeGoalHandler = (goalId) => {
    setGoals((prevState) => {
      return prevState.filter((item) => item.id !== goalId);
    });
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        isModalVisible={isAddMode}
        onChange={goalInputHandler}
        value={enteredGoal}
        // placeHolderString="Course goal"
        onPress={addGoalHandler}
        title="ADD"
        color="#1d3557"
        onCancleInput={() => setIsAddMode(false)}
      />
      <FlatList
        style={styles.listItems}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem onDelete={removeGoalHandler} itemData={itemData} />
        )}
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
