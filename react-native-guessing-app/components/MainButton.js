import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../constants/colors'

const MainButton = props => {
  let ButtonComponent = TouchableOpacity; // opacity effect for iOS

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback; // ripple effect for android
  }

  return (
    <View style={styles.buttonContainer}>
    <ButtonComponent onPress={props.onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </ButtonComponent>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 20
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans',
    fontSize: 20
  }
});

export default MainButton;
