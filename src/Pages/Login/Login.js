import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import styles from './Login.Style';
import Input from '../../components/Input';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Input placeholder="Lütfen Adınızı giriniz" />
      <Input placeholder="Lütfen Şifrenizi giriniz" />
    </SafeAreaView>
  );
};

export default Login;
