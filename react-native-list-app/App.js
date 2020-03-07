import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //take the latest snapshot of courseGoals and pass it as an argument to set state func
  const addGoalHandler = goalItem => {
    if (goalItem.length > 0) {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), text: goalItem } //FlatList expects an array of objects with a key
      ]);
    }
    setIsAddMode(false);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} onCancel={() => setIsAddMode(false)} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            text={itemData.item.text}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});

export default App;
