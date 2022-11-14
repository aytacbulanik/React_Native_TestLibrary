import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../../Components/Card/Card';

const URL = 'https://jsonplaceholder.typicode.com/users';
const Favorite = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={userList}
          renderItem={({item}) => <Card userData={item} />}
        />
      )}
    </View>
  );
};

export default Favorite;
