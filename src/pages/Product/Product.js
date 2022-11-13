import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';

const Product = ({navigation}) => {
  return (
    <View>
      <Text>Product</Text>
      <Button
        text="GoToEdit"
        onPress={() => navigation.navigate('ProductEditScreen')}
      />
    </View>
  );
};

export default Product;
