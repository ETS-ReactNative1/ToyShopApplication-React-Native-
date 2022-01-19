//App Navigator with the Tab Navigation
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import Icons

//Import Navigators

import {HomeScreen, Onboardingscreen, ProfileScreen} from '../Screens';
import HomeStack from './HomeStack';
import {AuthProvider} from './AuthProvider';
const Tab = createBottomTabNavigator();

export default function MainNavigator({}) {
  return (
    <AuthProvider>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Pro" component={ProfileScreen} />
      </Tab.Navigator>
    </AuthProvider>
  );
}

//MAin Navigator
