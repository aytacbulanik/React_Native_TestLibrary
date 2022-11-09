import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const First = props => {
  console.log(props);
  function gotoSecondPage() {
    props.navigation.navigate('SecondScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textDetail}>First !!!</Text>
      <Button title="GİT" onPress={gotoSecondPage} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDetail: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default First;
