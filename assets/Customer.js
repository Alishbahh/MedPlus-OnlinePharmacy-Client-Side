import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function CustomerScreen({navigation}){
return(
<Text> Customer Screen</Text>
);
}
export default CustomerScreen;