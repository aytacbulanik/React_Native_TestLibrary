import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

const UserSign = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');

  function saveData() {
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    console.log(user);
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
