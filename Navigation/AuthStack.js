import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loginscreen, Signupscreen} from '../Screens';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Login" component={Loginscreen} />
      <Auth.Screen name="Signup" component={Signupscreen} />
    </Auth.Navigator>
  );
}

//auth stack
