import {Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import React , {useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  function increase() { 
    setCounter(counter + 1)
  }

  function decrease() {
    setCounter(counter - 1)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.large_title}>{counter}</Text>
      <Button title='Arttır' onPress={increase} />
      <Button title='Azalt' onPress={decrease} />
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
