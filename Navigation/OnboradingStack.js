import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboardingscreen} from '../Screens';
const Boarding = createNativeStackNavigator();
export default function OnboradingStack() {
  return (
    <Boarding.Navigator screenOptions={{headerShown: false}}>
      <Boarding.Screen name="Boarding" component={Onboardingscreen} />
      
    </Boarding.Navigator>
  );
}

//Onboarding
