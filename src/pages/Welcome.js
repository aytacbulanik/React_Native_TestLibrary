import {View, Text} from 'react-native';
import React from 'react';
import Button from '../Components/Button';

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Button text="Yeni Üye Kaydı" onPress={null} />
    </View>
  );
};

export default Welcome;
