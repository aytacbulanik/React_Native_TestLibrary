import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import welcome from './pages/Welcome';
import userSign from './pages/UserSign';
import resultMember from './pages/ResultMember';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="userSign" component={userSign} />
        <Stack.Screen name="resultMember" component={resultMember} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
