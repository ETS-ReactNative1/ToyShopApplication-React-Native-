import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import Screeen from '../Components/Screeen';

export default function HomeScreen({navigation}) {
  //testing api

  return (
    <Screeen>
      <View style={styles.container}>
        <CustomHeader />
        <Text> hello </Text>
        <Pressable onPress={() => navigation.navigate('ProductInfo')}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: 'purple'}}>
            Move
          </Text>
        </Pressable>
      </View>
    </Screeen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
