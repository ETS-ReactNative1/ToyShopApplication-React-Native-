import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomeButton from '../Components/CustomeButton';
import Custominput from '../Components/Custominput';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';
import Authcontext from '../Navigation/Context';
export default function SignupScreen() {
  const [name, Setname] = useState();
  const [email, Setemail] = useState();
  const [Password, SetPassword] = useState();

  const authContext = useContext(Authcontext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textmain}>Welcome</Text>
        <Text style={styles.textsub}>Let's Start your Journey! </Text>
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
          onChangeText={Username => Setname(Username)}
        />
        <Custominput
          placeholder="Password"
          secure={true}
          onChangeText={Userpass => SetPassword(Userpass)}
        />
      </View>
      <CustomeButton
        title="Sign Up"
        onPress={() => console.warn('Pressed')}
        extrastyle={{backgroundColor: COLORS.AuthButton}}
        textstyle={{color: COLORS.secondary}}
      />
      <View style={styles.socialcontainer}>
        <Text style={styles.signintxt}> Sign in with</Text>
      </View>
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
    marginTop: '18%',
    marginHorizontal: 25,
  },
  signintxt: {
    ...fonststyle.description,
    color: COLORS.faintblack,
    textAlign: 'center',
    marginTop: '8%',
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
});

//Remaning
//To add the Google and facebook Sign in using Firebase
