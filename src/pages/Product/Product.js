import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard';

const allProductURL = 'https://fakestoreapi.com/products';
const Product = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get(allProductURL);
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ProductCardItem = ({item}) => <ProductCard productData={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} renderItem={ProductCardItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
export default Product;
