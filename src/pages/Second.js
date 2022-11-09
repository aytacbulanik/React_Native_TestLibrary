import {SafeAreaView, Text, Button} from 'react-native';
import React from 'react';

const second = props => {
  /* props içerisinde bize gelen goBack() fonksiyonunu kullanarak
  bir önceki sayfaya geri döndük */
  const user = props.route.params.username;
  console.log(user);
  function backFunc() {
    props.navigation.goBack();
  }
  return (
    <SafeAreaView>
      <Text>second</Text>
      <Text>kullanıcı adı : {user}</Text>
      <Button title="Go First" onPress={backFunc} />
    </SafeAreaView>
  );
};

export default second;
