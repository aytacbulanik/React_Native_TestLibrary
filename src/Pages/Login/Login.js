import {SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import styles from './Login.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';

const Login = () => {
  function handleLogin(values) {
    console.log(values);
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
            />
            <Button text="Kaydet" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
