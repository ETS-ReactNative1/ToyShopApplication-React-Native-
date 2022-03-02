import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width;
import Animated, {BounceInUp, FadeInDown} from 'react-native-reanimated';
import {fonststyle} from '../Config/fontstyles';

const size = WIDTH * 0.23;

export default function NewLoginScreen() {
  //ketframes animation for the Circle

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
      <View style={styles.txtincontainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B8FFF9',
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
    letterSpacing: 5,
    textAlign: 'center',
    marginVertical: 15,
  },
  txtincontainer: {},
});
