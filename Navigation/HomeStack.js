import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, Onboardingscreen} from '../Screens';
import {AuthProvider} from './AuthProvider';

const Stack = createNativeStackNavigator();

export default function HomeStack({}) {
  return (
    <AuthProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </AuthProvider>
  );
}

//homeStack

//We can also put the auth Stack into the Stack.Navigator and then we can conditionally Navogate
// the auth and the Home Stack

//navigators
