import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {fonststyle} from '../Config/fontstyles';
const {height, width} = Dimensions.get('screen');
const WIDTH = Dimensions.get('window').width;

const size = WIDTH * 0.9;

export default function BoardingSlides({index, translateX, Page, skipbtn}) {
  // console.log(Page);

  //animated Style
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const aStyle = useAnimatedStyle(() => {
    //interpolate the Scale

    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    //Asfaf

    return {
      transform: [{scale: scale}],
    };
  });

  //Text Animations
  const aImagestyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  //Animated Text

  const aTexystyle = useAnimatedStyle(() => {
    const translateY = interpolate(translateX.value, inputRange, [
      height / 2,
      0,
      -height / 2,
    ]);

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-5, 1, -5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        // {backgroundColor: `rgba(185,106,201,0.${index + 6})`},
      ]}>
      <TouchableOpacity onPress={skipbtn} style={styles.skipcontainer}>
        <Text style={styles.skiptext}>Skip</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.headingwrapper, aTexystyle]}>
        <Text style={[styles.txt]}>{Page.title}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.square,
          // {backgroundColor: `rgba(242,97,87,0.${index + 5})`},
          aStyle,
        ]}>
        <Animated.Image
          style={[styles.img, aImagestyle]}
          source={Page.source}
          resizeMode="cover"
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0D9FF',
  },
  square: {
    height: size,
    width: size,
    backgroundColor: '#BFA2DB',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  txt: {
    ...fonststyle.heading2,
  },
  img: {
    height: 250,
    width: 250,
  },
  headingwrapper: {
    paddingBottom: 15,
    marginBottom: 10,

    textAlign: 'center',
  },
  skipcontainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
    marginHorizontal: 5,
  },
  skiptext: {
    ...fonststyle.description,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});

//implement a new design from  dribbles
