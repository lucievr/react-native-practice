import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)} activeOpacity={0.7}>
      <View style={styles.listItem}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#c7ea46",
    padding: 10,
    marginVertical: 10,
    borderColor: "#000",
    borderWidth: 1
  }
});

export default GoalItem;
