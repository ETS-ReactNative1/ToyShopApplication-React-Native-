import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';

export default function CustomeButton({title}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '7%',
    width: '80%',
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    ...fonststyle.heading1,
    fontSize: 18,
    letterSpacing: 0.9,
  },
});
