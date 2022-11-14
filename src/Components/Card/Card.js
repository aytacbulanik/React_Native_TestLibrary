import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from './Card.Style';

const Card = ({userData}) => {
    console.log(userData);
  return (
    <SafeAreaView>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.username}>Card</Text>
      <Text style={styles.email}>Card</Text>
    </SafeAreaView>
  );
};

export default Card;
