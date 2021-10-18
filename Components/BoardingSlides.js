import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const size = width * 0.5;

export default function BoardingSlides({title, index, translateX}) {
  const scale = useSharedValue(0.01);

  // const AnimatedScale = useAnimatedStyle(() => {
  //   return {
  //     transform: [{scale: scale.value}],
  //   };
  // });

  // const startAnimation = () => {
  //   scale.value = withTiming(0, {
  //     duration: 500,
  //   });
  // };
  // useEffect(() => {
  //   startAnimation();
  // }, []);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square]}></Animated.View>
    </View>
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
    backgroundColor: 'rgba(0,0,256,0.9)',
    borderRadius: 100,
  },
});
