import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export default function DotComponent({index, activedot}) {
  // console.log(activedot.value, 'This is Activedot');
  const dotstyle = useAnimatedStyle(() => {
    const isActive = activedot.value === index;

    return {
      backgroundColor: withTiming(isActive ? '#2C272E' : '#f5f5f5', {
        duration: 200,
      }),
    };
  });

  return <Animated.View style={[styles.dot, dotstyle]} />;
}

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 5,
  },
});
