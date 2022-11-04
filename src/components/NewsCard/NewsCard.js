import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './NewsCard.Style';

const NewsCard = ({news}) => {
  console.log(news.title);
  return (
    <View style={styles.card_container}>
      <View style={styles.image_container}>
        <Image style={styles.image} />
      </View>
      <View style={styles.text_view}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.author}>Author</Text>
        <Text style={styles.description}>Description</Text>
      </View>
    </View>
  );
};

export default NewsCard;
