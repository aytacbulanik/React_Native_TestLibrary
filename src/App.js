import {Text, SafeAreaView, StyleSheet, Switch, FlatList} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const data = [
    {id: 0, name: 'Muhammet', isFavorite: true},
    {id: 1, name: 'John', isFavorite: false},
    {id: 2, name: 'Jane', isFavorite: true},
    {id: 3, name: 'Liam', isFavorite: false},
    {id: 4, name: 'Noah', isFavorite: true},
    {id: 5, name: 'Jack', isFavorite: false},
  ];
  const [switchOn, setSwitchOn] = useState(true);
  const [list, setList] = useState(data);

  const renderItem = ({item}) => <Text> {item.name}</Text>;
  console.log(switchOn);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.large_title}>Deneme List</Text>
      <Switch value={switchOn} onChange={() => setSwitchOn(!switchOn)} />
      <FlatList data={list} renderItem={renderItem} />
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
    marginBottom: 20,
  },
});
export default App;
