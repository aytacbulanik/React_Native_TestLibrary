import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';

import Product from '../../components/Product/Product';

import FetchData from '../../Hooks/FetchData';

const ProductScreen = () => {
  const {data, loading, error} = FetchData('https://fakestoreapi.com/products');
  const renderProduct = item => <Product product={item} />;
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} numColumns={'2'} />
    </SafeAreaView>
  );
};

export default ProductScreen;
