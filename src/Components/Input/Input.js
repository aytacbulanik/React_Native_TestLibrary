import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.Style';

const Input = ({label, placeholder, onValueText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onValueText={onValueText} />
      </View>
    </View>
  );
};

export default Input;
