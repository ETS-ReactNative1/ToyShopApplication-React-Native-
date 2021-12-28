import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtmain}>Let's Sign you in.</Text>
        <Text style={styles.txtsub}>
          Welcome back. {'\n'}You have been missed!
        </Text>
      </View>
      <View style={styles.maincontainer}>
        <TextInput
          placeholder="Phone,email or username"
          placeholderTextColor="#fff"
          style={styles.usertextinput}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#fff"
          style={styles.passtextinput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Login_Body,
    flex: 1,
  },
  txtcontainer: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  txtmain: {
    color: COLORS.secondary,
    ...fonststyle.heading3,
  },
  txtsub: {
    color: COLORS.subtext,
    ...fonststyle.description,
    fontSize: 26,
    marginTop: 10,
  },

  maincontainer: {
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 100,
    paddingHorizontal: 10,
  },

  usertextinput: {
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

  passtextinput: {
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

//Remaning
// Popping of the Onvoarding Screens from the Stack
// Building the  Login screens and the Sign up Screen
// Navigation from Login screen to the Homescreen
