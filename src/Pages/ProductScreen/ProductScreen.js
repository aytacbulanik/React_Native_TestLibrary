import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';

import Product from '../../components/Product/Product';

import FetchData from '../../Hooks/FetchData';

const ProductScreen = ({navigation}) => {
  const {data, loading, error} = FetchData('https://fakestoreapi.com/products');
  function goToDetail() {
    navigation.navigate('ProductDetailScreen');
  }
  const renderProduct = item => (
    <Product product={item} onSelect={goToDetail} />
  );
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} numColumns={'2'} />
    </SafeAreaView>
  );
};

export default ProductScreen;
