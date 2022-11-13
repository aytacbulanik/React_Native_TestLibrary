import {SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

const UserSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function saveData() {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Kebap Fitness App', 'Lütfen her alanı doldurunuz');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    navigation.navigate('resultMember', {user});
  }
  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Lütfen Üye Adını Giriniz"
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Lütfen Üye Soyadını Giriniz"
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye E-posta"
        placeholder="Lütfen Üye E-postasını Giriniz"
        onChangeText={setUserAge}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Lütfen Üye Yaşını Giriniz"
        onChangeText={setUserMail}
      />
      <Button text="Kayıt Ol" onPress={saveData} />
    </SafeAreaView>
  );
};

export default UserSign;
