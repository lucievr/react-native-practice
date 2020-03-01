import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = input => setEnteredGoal(input);
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  },
  textInput: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    margin: 10
  }
});

export default GoalInput;
