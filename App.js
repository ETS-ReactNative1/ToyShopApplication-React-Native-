/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboardingscreen} from './Screens/index';

//Main
import MainNavigator from './Navigation/MainNavigator';
//OnboardingStack
//Stack Nav for Onboarding Screens

import OnboradingStack from './Navigation/OnboradingStack';

let bool = true;

const App = () => {
  return (
    <>
      {bool === true ? (
        <NavigationContainer>
          <OnboradingStack />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

//App
