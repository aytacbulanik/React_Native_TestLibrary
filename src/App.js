import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Pages/HomeScreen/HomeScreen';
import ProductScreen from './Pages/ProductScreen/ProductScreen';
import ProductDetailScreen from './Pages/ProductDetailScreen/ProductDetailScreen';
import LoginScreen from './Pages/Login/Login';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: '#26c6da'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            title: 'Products',
            headerStyle: {backgroundColor: '#26c6da'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
