import {Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [sayi, setSayi] = useState(0);
  const [onlukSayi, setOnlukSayi] = useState(100);

  useEffect(() => console.log('sayi guncellendi'), [sayi]);
  useEffect(() => console.log('onlukSayı guncellendi'), [onlukSayi]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.large_title}>Deneme List</Text>
      <Text> Sayı : {sayi} </Text>
      <Button title="up sayi" onPress={() => setSayi(sayi + 1)} />
      <Text> OnlukSayı : {onlukSayi} </Text>
      <Button
        title="up OnlukSayı"
        onPress={() => setOnlukSayi(onlukSayi + 100)}
      />
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
