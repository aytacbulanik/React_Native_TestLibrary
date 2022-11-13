import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';

const ProductEdit = ({navigation}) => {
  return (
    <View>
      <Text>ProductEdit</Text>
      <Button
        text="GoToDetail"
        onPress={() => navigation.navigate('ProductDetailScreen')}
      />
    </View>
  );
};

export default ProductEdit;
