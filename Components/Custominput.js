import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';

export default function Custominput({style, placeholder, secure}) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#5d6578"
        style={[styles.textinput, style]}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1.3,
    borderColor: '#354341',
    borderRadius: 10,
    marginVertical: 10,

    paddingHorizontal: 15,
    ...fonststyle.description,
    fontSize: 15,
    fontWeight: 'normal',
    letterSpacing: 2,

    color: COLORS.fadewhite,
  },
});
