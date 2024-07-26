import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Userdetail({route}) {
  const {item} = route.params;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Userdetail</Text>
      <View style={styles.innerview}>
        <View style={styles.dataview}>
          <Text style={styles.text}>User Name: {item.username}</Text>
          <Text style={styles.text}>Company: {item.company.name}</Text>
          <Text style={styles.text}>Website: {item.website}</Text>
          <Text style={styles.text}>City: {item.address.city}</Text>
          <Text style={styles.text}>ZipCode: {item.address.zipcode}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  innerview: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  dataview: {
    backgroundColor: '#C9DABF',
    padding: 15,
    gap: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5F6F65',
    textAlign: 'left',
  },
});
