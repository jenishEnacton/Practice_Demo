import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TopTab2() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>TopTab2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCF7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#397848',
  },
});
