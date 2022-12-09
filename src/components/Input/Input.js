import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.Style';

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
      />
    </View>
  );
};

export default Input;
