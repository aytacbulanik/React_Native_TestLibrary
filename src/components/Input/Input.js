import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.Style';

const Input = ({placeholder, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onType} />
    </View>
  );
};

export default Input;
