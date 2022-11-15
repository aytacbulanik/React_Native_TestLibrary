import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Product.Style';
import axios from 'axios';

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

  const renderItem = () => {};
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  );
};

export default Product;
