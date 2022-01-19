import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loginscreen, Signupscreen} from '../Screens';
import {AuthProvider} from './AuthProvider';
const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <AuthProvider>
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="Login" component={Loginscreen} />
        <Auth.Screen name="Signup" component={Signupscreen} />
      </Auth.Navigator>
    </AuthProvider>
  );
}

//auth stack
