import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  const gotoProductScreen = () => {
    navigation.navigate('ProductScreen');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="GoToProduct" onPress={gotoProductScreen} />
    </View>
  );
};

export default HomeScreen;
