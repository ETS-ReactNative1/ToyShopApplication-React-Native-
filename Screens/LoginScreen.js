import React, {useState, useContext} from 'react';
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
import AuthContext from '../Navigation/Context';

export default function LoginScreen({navigation}) {
  const [email, Setemail] = useState();
  const [Password, SetPassword] = useState();

  const {login} = useContext(AuthContext);

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
        <Custominput
          placeholder="Phone,email or username"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={Useremail => Setemail(Useremail)}
        />
        <Custominput
          placeholder="Password"
          secure={true}
          onChangeText={Userpass => SetPassword(Userpass)}
        />
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
      <CustomeButton title="Sign in" onPress={() => login(email, Password)} />
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
