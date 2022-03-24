import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';

const WIDTH = Dimensions.get('window').width;
import Animated, {BounceInUp, FadeInDown} from 'react-native-reanimated';
import {fonststyle} from '../Config/fontstyles';
import useAuth from '../auth/useAuth';
import CustomeButton from '../Components/CustomeButton';
import {COLORS} from '../Config/ColorPallet';
import authentication from '../api/authentication';

import Custominput from '../Components/Custominput';
const size = WIDTH * 0.23;

//implemented the logig and Sign up fucntionality

//on press for Sign in

export default function NewLoginScreen({navigation}) {
  const [username, Setusername] = useState();
  const [password, SetPassword] = useState();

  //ketframes animation for the Circle

  //cutome hook
  const {login} = useAuth();

  const handleOnPress = async (username, password) => {
    try {
      const result = await authentication.login(username, password);
      const token = result.data;

      login(token);
    } catch (error) {
      console.log(error, 'Error from login trycatch');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.toybgplane}>
        <Animated.View
          style={styles.toybg}
          entering={BounceInUp.duration(2000)}>
          <Image
            source={require('../assets/Images/img12.png')}
            resizeMethod="scale"
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
            }}
          />
        </Animated.View>
        <Animated.View
          style={[styles.toybg, {top: '23%', left: '70%'}]}
          entering={BounceInUp.duration(2000).randomDelay(300)}>
          <Image
            source={require('../assets/Images/img5.png')}
            resizeMethod="scale"
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
            }}
          />
        </Animated.View>
        <Animated.View
          style={[styles.toybg, {top: '50%', left: '25%'}]}
          entering={BounceInUp.duration(2000).randomDelay(500)}>
          <Image
            source={require('../assets/Images/img13.png')}
            resizeMethod="scale"
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
            }}
          />
        </Animated.View>
      </View>

      <Animated.Text
        style={styles.logo}
        entering={FadeInDown.duration(3000).springify()}>
        ToyMania
      </Animated.Text>

      <Animated.View
        style={styles.maincontainer}
        entering={FadeInDown.duration(3000)}>
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

        <Text style={styles.registertxt}>
          Don't have an account?{' '}
          <Text
            style={styles.regitserbold}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Register{' '}
          </Text>{' '}
        </Text>
      </Animated.View>
      <Animated.View style={styles.buttonwrapper}>
        <CustomeButton
          title="Sign in"
          onPress={() => handleOnPress(username, password)}
          extrastyle={{backgroundColor: COLORS.AuthButton}}
          textstyle={{color: COLORS.secondary}}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2C9E1',
    flex: 1,
  },
  imagecontainer: {
    backgroundColor: 'red',
  },
  toybgplane: {
    // backgroundColor: 'pink',
    height: WIDTH * 0.6,
  },
  toybg: {
    position: 'absolute',
    height: size,
    width: size,
    backgroundColor: '#BFA2DB',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    left: -10,
    top: 10,
  },
  logo: {
    ...fonststyle.heading2,
    fontSize: 33,
    fontWeight: 'bold',
    letterSpacing: 8,
    textAlign: 'center',
    marginBottom: 15,
  },
  registertxt: {
    ...fonststyle.description,
    color: COLORS.faintblack,
    textAlign: 'center',
    marginTop: '5%',
    letterSpacing: 0.5,
  },
  regitserbold: {
    fontWeight: 'bold',
    color: COLORS.black,
    letterSpacing: 0.5,
    fontSize: 16,
  },
  maincontainer: {
    marginHorizontal: 15,

    marginTop: '2%',
    paddingHorizontal: 10,
  },
  buttonwrapper: {
    height: '100%',
  },
});
