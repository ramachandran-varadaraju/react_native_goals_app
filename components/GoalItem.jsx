import React from "react";

import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{props.itemData.item.goal}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#a8dadc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemText: { color: "#1d3557", fontSize: 16 },
});
