import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import axios from 'axios';

const Favorite = ({navigation}) => {
  const [cities, setCites] = useState([]);
  async function request() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log(response);
  }
  return (
    <View>
      <Text>Favorite</Text>
      <FlatList data={cities} renderItem={isim => <Text>{isim.item}</Text>} />
      <Button text="GoToEdit" onPress={request} />
    </View>
  );
};

export default Favorite;
