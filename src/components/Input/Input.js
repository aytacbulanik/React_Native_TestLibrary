import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.Style';

const Input = ({placeholder, value, onType, secure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default Input;
