import {SafeAreaView, Text, Button} from 'react-native';
import React from 'react';

const second = props => {
  function backFunc() {
    props.navigation.goBack();
  }
  return (
    <SafeAreaView>
      <Text>second</Text>
      <Button title="Go First" onPress={backFunc} />
    </SafeAreaView>
  );
};

export default second;
