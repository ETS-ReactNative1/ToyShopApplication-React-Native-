import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import useAuth from '../auth/useAuth';
export default function HomeScreen() {
  const {User, logout} = useAuth();

  //testing api

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: 10}}>
        HomeScreen
      </Text>
      <Pressable onPress={() => logout()}>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginVertical: 15}}>
          Press me for LogOut
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({});
