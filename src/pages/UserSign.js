import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import Input from '../Components/Input';

const UserSign = () => {
  return (
    <SafeAreaView>
      <Input label="Üye Adı" placeholder="Lütfen Üye Adını Giriniz" />
      <Input label="Üye Soyadı" placeholder="Lütfen Üye Soyadını Giriniz" />
      <Input label="Üye E-posta" placeholder="Lütfen Üye E-postasını Giriniz" />
      <Input label="Üye Yaşı" placeholder="Lütfen Üye Yaşını Giriniz" />
    </SafeAreaView>
  );
};

export default UserSign;
