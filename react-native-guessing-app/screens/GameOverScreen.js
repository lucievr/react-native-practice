import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>The Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            // source={require('../assets/success.png')}  FOR LOCAL IMAGEs
            source={{
              uri:
                'https://images.unsplash.com/photo-1513686122945-06b0831a3686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
            }}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={DefaultStyles.bodyText}>Number of rounds:</Text>
          <NumberContainer>{props.roundsNumber}</NumberContainer>
        </View>
        <View style={styles.resultContainer}>
          <Text style={DefaultStyles.bodyText}>The correct number was:</Text>
          <NumberContainer>{props.userNumber}</NumberContainer>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    // width and height always have to be set for network images,
    // for local images not necessary since React can determine its W & H before it renders the image using require
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GameOverScreen;
