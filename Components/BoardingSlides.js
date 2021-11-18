import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {fonststyle} from '../Config/fontstyles';
const {height, width} = Dimensions.get('window');

const size = width * 0.9;

export default function BoardingSlides({index, translateX, Page}) {
  console.log(Page);
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
        {backgroundColor: `rgba(185,106,201,0.${index + 6})`},
      ]}>
      <Animated.View style={[styles.headingwrapper, aTexystyle]}>
        <Text style={[styles.txt]}>{Page.title}</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.square,
          {backgroundColor: `rgba(242,97,87,0.${index + 5})`},
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
    flex: 1.5,
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: size,
    width: size,
    backgroundColor: '#1F363D',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    ...fonststyle.heading2,
  },
  img: {
    height: 250,
    width: 250,
  },
  headingwrapper: {
    position: 'absolute',
    top: 0,
    marginTop: 80,
    padding: 15,
  },
});
