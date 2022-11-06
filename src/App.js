import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Deneme</Text>
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
