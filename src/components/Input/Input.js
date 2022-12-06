import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({placeholder}) => {
  return (
    <View>
      <Text> Input </Text>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default Input;
