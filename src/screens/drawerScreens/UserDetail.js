import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function UserDetail() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>UserDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'black',
  },
});
