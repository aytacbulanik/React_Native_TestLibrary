import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import userSign from './pages/UserSign';
import welcome from './pages/Welcome';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="welcome" component={welcome} />
        <Tab.Screen name="userSing" component={userSign} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
