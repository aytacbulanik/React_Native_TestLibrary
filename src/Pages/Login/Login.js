import {SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import styles from './Login.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../asstes/login-shop.png')}
        />
      </View>
      <Formik initialValues={{userName: '', password: ''}}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input placeholder="Lütfen Adınızı giriniz" />
            <Input placeholder="Lütfen Şifrenizi giriniz" />
            <Button text="Kaydet" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
