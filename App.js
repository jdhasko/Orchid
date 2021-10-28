import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navitgation/AuthNavigator';
import LoginScreen from './src/screens/LoginScreen';
import Theme from './statics/mainStyle';

export default function App() {
  return (
    <Theme>
        <LoginScreen/>
        <StatusBar style="auto" />
    </Theme>
  );
}

