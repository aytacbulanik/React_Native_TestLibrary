import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import welcome from './pages/Welcome';
import userSign from './pages/UserSign';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="userSign" component={userSign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
