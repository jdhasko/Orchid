import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from "../screens/LoginScreen"

const {Navigator, Screen} = createNativeStackNavigator();

const authNavigator = () => {
    return (
        <Navigator>
            <Screen name="Login" component={LoginScreen}/>
        </Navigator>
    )
}

export default authNavigator
