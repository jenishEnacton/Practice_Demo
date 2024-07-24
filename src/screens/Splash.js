import {StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {StackNav} from '../navigation/StackNavigationKeys';

export default function Splash({navigation}) {
  return (
    <View style={styles.main}>
      <LottieView
        source={require('../assets/splash.json')}
        style={styles.splash}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate(StackNav.Screen1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  splash: {
    height: '100%',
    width: '100%',
    resizeMode: '',
    backgroundColor: '#157EF8',
  },
});
