import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './Product.Style';

const Product = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Product;
