import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import first from './pages/First';
import second from './pages/Second';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Screen deneme" component={first} />
        <Stack.Screen name="SecondScreen" component={second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
