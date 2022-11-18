import React from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native';
import ProductCard from '../../Components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';

const allProductURL = Config.API_URL;
const Product = () => {
  const {data, loading, error} = useFetch(allProductURL);
  const ProductCardItem = ({item}) => <ProductCard productData={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={ProductCardItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
export default Product;
