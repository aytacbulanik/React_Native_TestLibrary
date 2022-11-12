import {View, Text} from 'react-native';
import React from 'react';
import Button from '../Components/Button';

const Welcome = ({navigation}) => {
  function gotoUsersign() {
    navigation.navigate('userSign');
  }
  return (
    <View>
      <Text>Welcome</Text>
      <Button text="Yeni Üye Kaydı" onPress={gotoUsersign} />
    </View>
  );
};

export default Welcome;
