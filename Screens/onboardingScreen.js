import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function onboardingScreen({navigation}) {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>This is the Onboarding Screen yoyo yo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
