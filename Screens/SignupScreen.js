import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import CustomeButton from '../Components/CustomeButton';
import Custominput from '../Components/Custominput';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';
import authentication from '../api/authentication';
import useAuth from '../auth/useAuth';
export default function SignupScreen() {
  const [username, Setusername] = useState();
  const [email, Setemail] = useState();
  const [password, Setpassword] = useState();
  const [error, Seterror] = useState(false);

  const {login} = useAuth();

  //handling on Signin press

  const handleSignin = async userInfo => {
    try {
      const response = await authentication.Signin(userInfo);
      console.log(response.data);

      console.log(userInfo.email);

      //if there is reponse.data
      //then we will login the user

      const result = await authentication.login(
        userInfo.username,
        userInfo.password,
      );

      const token = result.data;
      console.log(token);

      login(token);
    } catch (error) {
      Seterror(true);
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView>
        <View style={styles.header}>
          <Text style={styles.textmain}>Welcome</Text>
          <Text style={styles.textsub}>Let's Start your Journey! </Text>
        </View>

        <View style={styles.errorcontainer}>
          {error ? (
            <Text style={styles.errortext}> Email / Name alredy exist! </Text>
          ) : null}
        </View>

        <View style={styles.inputcontaienr}>
          <Custominput
            placeholder="Email"
            onChangeText={Useremail => Setemail(Useremail)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Custominput
            placeholder="Name"
            onChangeText={Username => Setusername(Username)}
          />
          <Custominput
            placeholder="Password"
            secure={true}
            onChangeText={Userpass => Setpassword(Userpass)}
          />
        </View>

        <CustomeButton
          title="Sign Up"
          onPress={() => handleSignin({username, email, password})}
          extrastyle={{backgroundColor: COLORS.AuthButton, height: '9%'}}
          textstyle={{color: COLORS.secondary}}
        />

        <View style={styles.socialcontainer}>
          <Text style={styles.signintxt}> Sign in with</Text>
        </View>
      </KeyboardAvoidingView>
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
    color: COLORS.black,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  textsub: {
    ...fonststyle.description,
    color: COLORS.black,
    fontSize: 24,
    marginTop: 10,
    letterSpacing: 0.3,
    letterSpacing: 0.6,
    fontWeight: 'bold',
  },
  inputcontaienr: {
    marginTop: '10%',
    marginHorizontal: 25,
  },
  signintxt: {
    ...fonststyle.description,
    color: COLORS.faintblack,
    textAlign: 'center',
    marginTop: '5%',
    letterSpacing: 0.7,
    fontWeight: 'bold',
    fontSize: 17,
  },
  errorcontainer: {
    top: 40,
    height: 25,
    justifyContent: 'center',
  },
  errortext: {
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontSize: 15,
    color: 'orangered',
  },
});

//Remaning
//To add the Google and facebook Sign in using Firebase
