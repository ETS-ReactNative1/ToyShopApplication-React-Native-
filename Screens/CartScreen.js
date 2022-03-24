import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Screeen from '../Components/Screeen';
import CustomHeader from '../Components/CustomHeader';

export default function CartScreen() {
  return (
    <Screeen>
      <View style={styles.container}>
        <CustomHeader arrow={true} screenname="Cart" />
      </View>
    </Screeen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
