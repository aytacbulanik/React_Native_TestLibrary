import {SafeAreaView, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../Components/Button';

const Welcome = ({navigation}) => {
  function gotoUsersign() {
    navigation.navigate('userSign');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to New App</Text>
      <Button text="Yeni Üye Kaydı" onPress={gotoUsersign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
  },
});

export default Welcome;
