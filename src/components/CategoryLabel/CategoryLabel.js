import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './Category.Style';

const CategoryLabel = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.text}>{category.item.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryLabel;
