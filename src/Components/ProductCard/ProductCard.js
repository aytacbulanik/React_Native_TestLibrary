import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ProductCard.Style';

const ProductCard = ({productData, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: productData.image}} />
        <View style={styles.text_container}>
          <Text style={styles.title}>{productData.title}</Text>
          <Text>Categori: {productData.category}</Text>
          <Text style={styles.price}>{productData.price} ₺</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
