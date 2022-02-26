import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AuthContext from '../Navigation/Context';
export default function HomeScreen() {
  const authContext = useContext(AuthContext);

  //testing api

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: 10}}>
        HomeScreen
      </Text>
      <Pressable onPress={() => console.warn('Pressed')}>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginVertical: 15}}>
          Press me for LogOut
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({});
