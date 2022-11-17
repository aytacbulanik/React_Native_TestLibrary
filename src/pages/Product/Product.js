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
import Config from 'react-native-config';

const allProductURL = Config.API_URL;
const Product = () => {
  const {data, loading, error} = useFetch(allProductURL);
  const ProductCardItem = ({item}) => <ProductCard productData={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  console.log(Config.API_URL);
  return (
    
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={ProductCardItem} />
      <Text>{Config.API_UR}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
export default Product;
