import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.Style';

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
