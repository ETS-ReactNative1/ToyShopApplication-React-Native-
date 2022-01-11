import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: 10}}>
        HomeScreen
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
