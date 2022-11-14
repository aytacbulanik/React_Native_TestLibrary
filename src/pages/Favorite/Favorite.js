import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import axios from 'axios';
import Card from '../../Components/Card/Card';

const Favorite = ({navigation}) => {
  const [userList, setUserList] = useState([]);
  async function request() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUserList(response.data);
  }
  return (
    <View>
      <Text>Favorite</Text>
      <FlatList
        data={userList}
        renderItem={({item}) => <Card userData={item} />}
      />
      <Button text="GoToEdit" onPress={request} />
    </View>
  );
};

export default Favorite;
