import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomHeader({goback, screenname}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goback}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <Text>{screenname}</Text>
      <Text>CustomHeader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    height: '8%',
    paddingHorizontal: 20,
  },
});
