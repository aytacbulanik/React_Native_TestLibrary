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

  const gotoProductScreen = id => {
    navigation.navigate('ProductScreen', {id});
  };

  const categoryRenderItem = ({item}) => (
    <CategoryLabel
      category={item}
      onSelect={() => gotoProductScreen(item.id)}
    />
  );
  return (
    <View>
      <FlatList data={gelenData} renderItem={categoryRenderItem} />
    </View>
  );
};

export default HomeScreen;
