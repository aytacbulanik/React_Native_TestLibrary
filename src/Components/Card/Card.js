import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from './Card.Style';

const Card = ({userData}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.username}>{userData.username}</Text>
      <Text style={styles.email}>{userData.email}</Text>
    </SafeAreaView>
  );
};

export default Card;
