import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import product from '../src/pages/Product/Product';
import detail from '../src/pages/Detail/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={product}
          options={{
            title: 'Dükkanımız',
            headerStyle: {backgroundColor: 'aqua'},
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="Detail"
          component={detail}
          options={{
            title: 'Ürün Detayı',
            headerStyle: {backgroundColor: 'aqua'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
