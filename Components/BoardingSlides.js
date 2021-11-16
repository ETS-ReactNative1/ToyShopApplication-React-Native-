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

const {height, width} = Dimensions.get('window');

const size = width * 0.9;

export default function BoardingSlides({title, index, translateX, Page}) {
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
  const aTextstyle = useAnimatedStyle(() => {
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

  return (
    <Animated.View
      style={[
        styles.container,
        {backgroundColor: `rgba(255,99,71,0.${index + 3})`},
      ]}>
      {/* <Text style={[styles.txt]}>{title}</Text> */}
      <Animated.View style={[styles.square, aStyle]} />
      <Animated.View style={[styles.textcontainer, aTextstyle]}>
        <Animated.Image
          style={styles.img}
          source={Page.source}
          resizeMode="cover"
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: size,
    width: size,
    backgroundColor: 'orangered',
    borderRadius: 200,
  },
  textcontainer: {
    position: 'absolute',
  },
  txt: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 70,
  },
  img: {
    height: 250,
    width: 250,
  },
});
