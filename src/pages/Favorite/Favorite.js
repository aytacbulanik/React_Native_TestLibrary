import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import axios from 'axios';

const Favorite = ({navigation}) => {
  const [cities, setCites] = useState([]);
  function request() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(object =>
        setCites(
          object.data.map(data => {
            return data.address.city;
          }),
        ),
      )
      .catch(error => console.log(error));
  }
  console.log(cities);
  return (
    <View>
      <Text>Favorite</Text>
      <FlatList data={cities} renderItem={isim => <Text>{isim.item}</Text>} />
      <Button text="GoToEdit" onPress={request} />
    </View>
  );
};

export default Favorite;
