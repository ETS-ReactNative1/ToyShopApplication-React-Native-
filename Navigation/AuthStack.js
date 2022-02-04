import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loginscreen, Onboardingscreen, Signupscreen} from '../Screens';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  //implementation of a logic for onboarding screens

  const [firstLoding, setfirstloding] = useState(null);

  useEffect(() => {
    //using asycstorage
    AsyncStorage.getItem('alreadylaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadylaunched', 'true'); //set alredy launched to true
        setfirstloding(true);
      } else {
        setfirstloding(false);
      }
    }, []);
  });

  //Setting up the route name according to the
  //state

  if (firstLoding === null) {
    return null;
  } else if (firstLoding === true) {
    routename = 'onboarding';
  } else {
    routename = 'Login';
  }

  return (
    <Auth.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routename}>
      <Auth.Screen name="onboarding" component={Onboardingscreen} />
      <Auth.Screen name="Login" component={Loginscreen} />
      <Auth.Screen name="Signup" component={Signupscreen} />
    </Auth.Navigator>
  );
}

//auth stack
