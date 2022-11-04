import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import NewsCard from './components/NewsCard';
import newsData from './news_data.json';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.large_title}> News </Text>
      <FlatList data={newsData} renderItem={renderNews} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  large_title: {
    backgroundColor: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
