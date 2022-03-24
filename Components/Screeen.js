import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

export default function Screeen({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
