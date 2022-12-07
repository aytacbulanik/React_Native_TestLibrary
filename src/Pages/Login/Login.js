import {SafeAreaView, View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Login.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../asstes/login-shop.png')}
        />
      </View>
      <View>
        <Input placeholder="Lütfen Adınızı giriniz" />
        <Input placeholder="Lütfen Şifrenizi giriniz" />
        <Button text="Kaydet" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
