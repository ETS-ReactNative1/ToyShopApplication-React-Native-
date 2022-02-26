import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomeButton from '../Components/CustomeButton';
import Custominput from '../Components/Custominput';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';
import AuthContext from '../Navigation/Context';
import authentication from '../api/authentication';
import jwtDecode from 'jwt-decode';
import authStorage from '../auth/storage';

export default function LoginScreen({navigation}) {
  const [username, Setusername] = useState();
  const [password, SetPassword] = useState();

  //  console.log(email, password);

  // console.log(username, password, 'from the state');

  const authContext = useContext(AuthContext);

  //on press for Sign in
  const handleOnPress = async (username, password) => {
    //making call to api

    try {
      const result = await authentication.login(username, password);
      const token = result.data;

      //decoding the Token

      const user = jwtDecode(token.accessToken);

      authContext.SetUser(user);

      //Stroing token
      //error : =>  To be Store as String
      authStorage.storetoken(token.toString());

      //console.log(user);
    } catch (error) {
      // console.log(error, 'Error from login trycatch');
    }
  };

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
          autoCorrect={false}
          onChangeText={Useremail => Setusername(Useremail)}
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

      <CustomeButton
        title="Sign in"
        onPress={() => handleOnPress(username, password)}
        extrastyle={{backgroundColor: COLORS.AuthButton}}
        textstyle={{color: COLORS.secondary}}
      />
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
    color: COLORS.Loginheading,
    ...fonststyle.heading3,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  txtsub: {
    color: COLORS.Loginsubtext,
    ...fonststyle.description,
    fontSize: 25,
    marginTop: 10,
    letterSpacing: 0.3,
    fontWeight: 'bold',
  },

  maincontainer: {
    marginHorizontal: 15,

    marginTop: '22%',
    paddingHorizontal: 10,
  },

  registertxt: {
    ...fonststyle.description,
    color: COLORS.faintblack,
    textAlign: 'center',
    marginTop: '10%',
    letterSpacing: 0.5,
  },
  regitserbold: {
    fontWeight: 'bold',
    color: COLORS.black,
    letterSpacing: 0.5,
    fontSize: 15,
  },
});

//Remaning
// Popping of the Onvoarding Screens from the Stack
// Building the  Login screens and the Sign up Screen
// Navigation from Login screen to the Homescreen
