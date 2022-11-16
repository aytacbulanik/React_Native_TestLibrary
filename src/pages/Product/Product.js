import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import ProductCard from '../../Components/ProductCard';
import useFetch from '../../hooks/useFetch';

const allProductURL = 'https://fakestoreapi.com/products';
const Product = () => {
  const {data, loading, error} = useFetch(allProductURL);
  const ProductCardItem = ({item}) => <ProductCard productData={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
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
