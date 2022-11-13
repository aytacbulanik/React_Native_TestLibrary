import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';

const Favorite = ({navigation}) => {
  return (
    <View>
      <Text>Favorite</Text>
      <Button
        text="GoToEdit"
        onPress={() => navigation.navigate('FavoriteEditScreen')}
      />
    </View>
  );
};

export default Favorite;
