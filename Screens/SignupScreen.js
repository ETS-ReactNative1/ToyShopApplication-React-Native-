import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomeButton from '../Components/CustomeButton';
import Custominput from '../Components/Custominput';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';

export default function SignupScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textmain}>Welcome</Text>
        <Text style={styles.textsub}>Let's Start yout Journey! </Text>
      </View>
      <View style={styles.inputcontaienr}>
        <Custominput placeholder="Email" />
        <Custominput placeholder="Name" />
        <Custominput placeholder="Password" secure={true} />
      </View>
      <CustomeButton title="Sign Up" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.Login_Body,
  },

  header: {
    marginTop: '15%',
    marginHorizontal: 20,
  },
  textmain: {
    ...fonststyle.heading3,
    color: COLORS.secondary,
    letterSpacing: 0.5,
  },
  textsub: {
    ...fonststyle.description,
    color: COLORS.subtext,
    fontSize: 24,
    marginTop: 10,
    letterSpacing: 0.3,
    letterSpacing: 0.6,
  },
  inputcontaienr: {
    marginTop: '18%',
    marginHorizontal: 25,
  },
});
