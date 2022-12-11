import {SafeAreaView, View, Image, Alert} from 'react-native';
import React from 'react';
import styles from './Login.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost/usePost';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const {data, loading, error, post} = usePost();
  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }
  if (error) {
    Alert.alert('HATA', 'Bir hata oluştu' + error);
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('HATA', 'Kullanıcı Bulunamadı');
    } else {
      AsyncStorage.setItem('@user', JSON.stringify(user));
    }
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../asstes/login-shop.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              placeholder="Lütfen Adınızı giriniz"
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="Lütfen Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              secure={true}
            />
            <Button text="Kaydet" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
