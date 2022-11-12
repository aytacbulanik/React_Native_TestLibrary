import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.Style';

const Input = ({label}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View>
        <TextInput />
      </View>
    </View>
  );
};

export default Input;
