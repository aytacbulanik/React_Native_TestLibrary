import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';

import Product from '../../components/Product/Product';
import FetchData from '../../Hooks/FetchData';

const ProductScreen = ({navigation, route}) => {
  const {data, loading, error} = FetchData('https://fakestoreapi.com/products');
  const goToDetail = id => {
    navigation.navigate('ProductDetailScreen', {id});
  };
  const {id} = route.params;
  let categoryName = '';
  switch (id) {
    case 0:
      categoryName = 'electronics';
      break;
    case 1:
      categoryName = 'jewelery';
      break;
    case 2:
      categoryName = "men's clothing";
      break;
    case 3:
      categoryName = "women's clothing";
      break;
  }
  const filteredData = data.filter(item => item.category === categoryName);
  const renderProduct = ({item}) => (
    <Product product={item} onSelect={() => goToDetail(item.id)} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={filteredData}
        renderItem={renderProduct}
        numColumns={'2'}
      />
    </SafeAreaView>
  );
};

export default ProductScreen;
