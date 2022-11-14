import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import axios from 'axios';

const Favorite = ({navigation}) => {
  function request() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(object => {
        console.log(object.data[0].address.city);
      })
      .catch(error => console.log(error));
  }
  return (
    <View>
      <Text>Favorite</Text>
      <Button text="GoToEdit" onPress={request} />
    </View>
  );
};

export default Favorite;
