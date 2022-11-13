import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import favorite from './pages/Favorite/Favorite';
import favoriteEdit from './pages/Favorite/Favorite.Edit';
import product from './pages/Product/Product';
import productDetail from './pages/Product/Product.Detail';
import productEdit from './pages/Product/Product.Edit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteScreen" component={favorite} />
      <Stack.Screen name="FavoriteEditScreen" component={favoriteEdit} />
    </Stack.Navigator>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={null}>
      <Stack.Screen name="ProductScreen" component={product} />
      <Stack.Screen name="ProductDetailScreen" component={productDetail} />
      <Stack.Screen name="ProductEditScreen" component={productEdit} />
    </Stack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FavoriteStackScreen" component={FavoriteStack} />
        <Tab.Screen name="ProductStackScreen" component={ProductStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
