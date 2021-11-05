import {transform} from '@babel/core';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const size = width * 0.5;

export default function BoardingSlides({title, index, translateX}) {
  const scale = useSharedValue(0);
  const AnimatedStyleScroll = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  const scale2 = useSharedValue(15);
  const AnimatedStyleScroll2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale2.value}],
    };
  });
  const scale3 = useSharedValue(15);
  const AnimatedStyleScroll3 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale3.value}],
    };
  });

  const topage1 = e => {
    setTimeout(() => {
      scale2.value = withTiming(5, {duration: 300}, e => {
        if (e) {
          runOnJS(topage2)(e);
        }
      });
    }, 300);
  };

  //start Animation function

  const StartAnimation = () => {
    scale.value = withTiming(15, {duration: 300}, e => {});
  };

  //To run the animation when Screen Gets Mounted
  useEffect(() => {
    //Function to Run the Animation
    StartAnimation();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View
        style={[styles.square, AnimatedStyleScroll]}></Animated.View>
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
