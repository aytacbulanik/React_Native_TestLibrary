import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.Style';

const ProductCard = ({productData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: productData.image}} />
      </View>
      <View>
        <Text>{productData.category}</Text>
        <Text>{productData.title}</Text>
        <Text>{productData.price} ₺</Text>
      </View>
    </View>
  );
};

export default ProductCard;
