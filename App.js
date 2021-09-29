/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: 'NunitoBold', fontSize: 25}}>
          Hello This is React Native
        </Text>
        <Text style={{fontSize: 25}}>This is Test</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
