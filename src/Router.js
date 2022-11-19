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
        <Stack.Screen name="Product" component={product} />
        <Stack.Screen name="Detail" component={detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
