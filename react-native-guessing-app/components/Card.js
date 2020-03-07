import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    // new object with card style below + style passed through props which will overwrite card style since it's last
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    // shadow properties only work on iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    // Android's equivalent of a shadow
    elevation: 7
  }
});

export default Card;
