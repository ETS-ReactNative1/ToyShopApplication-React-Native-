/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Authcontext, AuthProvider} from './Navigation/AuthProvider';
import auth from '@react-native-firebase/auth';

//Main
import MainNavigator from './Navigation/MainNavigator';
//OnboardingStack
//Stack Nav for Onboarding Screens

import OnboradingStack from './Navigation/OnboradingStack';
import AuthStack from './Navigation/AuthStack';

let bool = true;

const Stack = createNativeStackNavigator();

const App = () => {
  const {user, Setuser} = useContext(Authcontext);

  //to determine of launched first or not

  const [isFirstLaunched, SetisFirstLaunched] = useState(null);

  //using context to get the user

  const [intializing, Setintializing] = useState(true);

  const onAuthStateChanged = user => {};

  //Setting up the effect

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        SetisFirstLaunched(true);
      } else {
        SetisFirstLaunched(false);
      }
    });
  }, []);

  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched === true) {
    return (
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Onboardingstack" component={OnboradingStack} />
            <Stack.Screen name="AUthStack" component={AuthStack} />
            <Stack.Screen name="Mainstack" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AUthStack" component={AuthStack} />
            <Stack.Screen name="Mainstack" component={MainNavigator} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    );
  }
};

export default App;

//Main stack is for Main HomeScreens
//Auth Stack is For Authentication Screens
