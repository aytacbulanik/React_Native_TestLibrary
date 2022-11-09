import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; //tüm uygulamayı saran navigasyon yapısı
import {createNativeStackNavigator} from '@react-navigation/native-stack'; //sayfaları oluşturan navigasyon yapısı
import first from './pages/First'; //ilk sayfayı component olarak çağırdık
import second from './pages/Second'; //ikinci sayfayı component olarka çağırdık

const Stack = createNativeStackNavigator(); //stack yapısını kullanacağımız değişken

function App() {
  return (
    /*tüm uygulamayı saran navigation container altında sayfaları tutan stack onun
    onun altında ise her sayfayı stack.screen yapısıyla oluşturuyoruz
    name unique olmak zorunda
    component ise oluşturulan her bir sayfaya ait olan .js dosyaları
    */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Screen deneme" component={first} />
        <Stack.Screen name="SecondScreen" component={second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
