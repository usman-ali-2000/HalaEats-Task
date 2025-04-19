import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Splash from './src/screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import { Provider } from 'react-redux';
import store from './src/components/store';
import Cart from './src/screens/Cart';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Splash'
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})