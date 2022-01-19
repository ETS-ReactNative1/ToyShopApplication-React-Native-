import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000" size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
