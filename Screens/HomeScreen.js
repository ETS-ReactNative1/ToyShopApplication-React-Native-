import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Pro')}>
        <Text> This is HomeScreen YO </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
