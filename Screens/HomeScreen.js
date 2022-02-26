import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AuthContext from '../Navigation/Context';
import authStorage from '../auth/storage';
export default function HomeScreen() {
  const authContext = useContext(AuthContext);

  const handlelogout = () => {
    authContext.SetUser(null);
    //Remove the token from async storage
    authStorage.removetoken();
  };

  //testing api

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: 10}}>
        HomeScreen
      </Text>
      <Pressable onPress={() => handlelogout()}>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginVertical: 15}}>
          Press me for LogOut
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({});
