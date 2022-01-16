import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem(props) {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.itemData.item.id)}
    >
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.itemData.item.goal}</Text>
      </View>
    </TouchableOpacity>
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
