import React, {useState, useContext, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

import {NavigationContainer} from '@react-navigation/native';

//Stacks
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
