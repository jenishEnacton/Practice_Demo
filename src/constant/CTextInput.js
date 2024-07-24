import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function CTextInput(props) {
  const {
    title,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onBlur,
    keyboardType,
    name,
    extrinsty,
  } = props;
  return (
    <View style={styles.inputview}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.inputcontainer, extrinsty]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        keyboardType={keyboardType}
        name={name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputview: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  inputcontainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    fontSize: 20,
  },
});
