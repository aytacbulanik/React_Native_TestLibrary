import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Deneme</Text>
      <Icon name="key" size={30} />
    </View>
  );
};

export default HomeScreen;
