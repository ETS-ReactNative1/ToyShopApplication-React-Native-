import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Screeen from '../Components/Screeen';

export default function ProductInfoScreen() {
  return (
    <Screeen>
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <Text>ProductInfoScreen</Text>
      </View>
    </Screeen>
  );
}

const styles = StyleSheet.create({});
