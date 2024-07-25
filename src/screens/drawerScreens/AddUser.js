import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AddUser() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>AddUser</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'black',
  },
});
