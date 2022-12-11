import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.Style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
