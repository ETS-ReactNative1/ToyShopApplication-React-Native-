import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
import {Keyframe} from 'react-native-reanimated';

const size = WIDTH * 0.3;

export default function NewLoginScreen() {
  //ketframes animation for the Circle
  const bubbleanimation = new Keyframe({
    0: {
      borderRadius: 0,
    },
  });

  return (
    <View>
      <View style={styles.toybgplane}>
        <View style={styles.toybg}>
          <Image
            source={require('../assets/Images/img12.png')}
            resizeMethod="scale"
            style={{
              height: 90,
              width: 90,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={[styles.toybg, {top: '23%', left: '70%'}]}>
          <Image
            source={require('../assets/Images/img5.png')}
            resizeMethod="scale"
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={[styles.toybg, {top: '50%', left: '25%'}]}>
          <Image
            source={require('../assets/Images/img13.png')}
            resizeMethod="scale"
            style={{
              height: 90,
              width: 90,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>

      <Text>NewLoginScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
