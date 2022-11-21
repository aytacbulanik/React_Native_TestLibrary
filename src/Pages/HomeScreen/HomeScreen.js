import {View, FlatList} from 'react-native';
import React from 'react';
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel';

const HomeScreen = ({navigation}) => {
  const gelenData = [
    {id: 0, name: 'electronics'},
    {id: 1, name: 'jewelery'},
    {id: 2, name: 'mens clothing'},
    {id: 3, name: 'womens clothing'},
  ];

  const gotoProductScreen = () => {
    navigation.navigate('ProductScreen');
  };

  const categoryRenderItem = item => (
    <CategoryLabel category={item} onSelect={gotoProductScreen} />
  );
  return (
    <View>
      <FlatList data={gelenData} renderItem={categoryRenderItem} />
    </View>
  );
};

export default HomeScreen;
