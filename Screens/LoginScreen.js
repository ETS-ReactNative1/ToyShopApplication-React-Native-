import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import CustomeButton from '../Components/CustomeButton';
import Custominput from '../Components/Custominput';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';

export default function LoginScreen({navigation}) {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.txtcontainer}>
        <Text style={styles.txtmain}>Let's Sign you in.</Text>
        <Text style={styles.txtsub}>
          Welcome back. {'\n'}You have been missed!
        </Text>
      </View>
      <View style={styles.maincontainer}>
        <Custominput placeholder="Phone,email or username" />
        <Custominput placeholder="Password" secure={true} />
      </View>
      <Text style={styles.registertxt}>
        Don't have an account?{' '}
        <Text
          style={styles.regitserbold}
          onPress={() => navigation.navigate('Signup')}>
          {' '}
          Register{' '}
        </Text>{' '}
      </Text>
      <CustomeButton title="Sign in" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Login_Body,
    flex: 1,
  },
  txtcontainer: {
    marginTop: '15%',
    marginHorizontal: 20,
  },
  txtmain: {
    color: COLORS.secondary,
    ...fonststyle.heading3,
  },
  txtsub: {
    color: COLORS.subtext,
    ...fonststyle.description,
    fontSize: 24,
    marginTop: 10,
    letterSpacing: 0.3,
  },

  maincontainer: {
    marginHorizontal: 15,

    marginTop: '22%',
    paddingHorizontal: 10,
  },

  registertxt: {
    ...fonststyle.description,
    color: COLORS.fadewhite,
    textAlign: 'center',
    marginTop: '10%',
    letterSpacing: 0.5,
  },
  regitserbold: {
    fontWeight: 'bold',
    color: COLORS.secondary,
    letterSpacing: 0.5,
  },
});

//Remaning
// Popping of the Onvoarding Screens from the Stack
// Building the  Login screens and the Sign up Screen
// Navigation from Login screen to the Homescreen
