import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Theme from './src/statics/mainStyle';
import * as ScreenOrientation from 'expo-screen-orientation';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


export default function App() {

  useEffect(() => {

    alert( screenWidth + " - " + screenHeight )
    if(screenWidth >= 600 && screenHeight >= 900 ){
       ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
       const screenHeight = Dimensions.get('window').height;
       const screenWidth = Dimensions.get('window').width;
    }
    return () => {
      
    }
  }, [])

  return (
    <Theme>
        <LoginScreen/>
        <StatusBar style="auto" />
    </Theme>
  );
}

