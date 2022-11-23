import {View, Text, Image} from 'react-native';
import React from 'react';
import FetchData from '../../Hooks/FetchData';
import styles from './ProductDetailScreen.Style';

const ProductDetailScreen = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = FetchData(
    'https://fakestoreapi.com/products/' + id,
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
