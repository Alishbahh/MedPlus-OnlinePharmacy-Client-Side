import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './assets/LoginScreen';
import SignupScreen from './assets/SignupScreen';
import Customer from './assets/Customer';
import Forgotpass from './assets/Forgotpass';
import Pharmacy from './assets/pharmacy';
import Cart from './assets/Cart'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="DisplayCart">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="Forgot Password" component={Forgotpass} />
       <Stack.Screen name="cart" component={Cart}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}
const CustomerDrawer = () => {
  return(

      <Drawer.Navigator>
        <Drawer.Screen name="CustomerPharmacy" component={Customer} />
        <Drawer.Screen name="Cart"  />
        <Drawer.Screen name="Profile" />
      </Drawer.Navigator>
  
  );
}
