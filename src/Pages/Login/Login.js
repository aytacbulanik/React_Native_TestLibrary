import {SafeAreaView, View, Image, Alert} from 'react-native';
import React from 'react';
import styles from './Login.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost/usePost';

const Login = () => {
  const {data, loading, error, post} = usePost();
  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }
  if (error) {
    Alert.alert('Kullanıcı bulunamadı.');
  }

  console.log(data);
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
