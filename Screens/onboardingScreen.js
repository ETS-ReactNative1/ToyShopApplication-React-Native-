import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  event,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BoardingSlides from '../Components/BoardingSlides';

//Array for the Data
const Words = ['Hey', 'There', "I'am", 'developer'];

export default function Onboardingscreen({navigation}) {
  const translateX = useSharedValue(0);

  const Scrollhandler = useAnimatedScrollHandler(event => {
    //Store the Content offset Value
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={Scrollhandler}
      scrollEventThrottle={16}
      snapToAlignment
      horizontal>
      {Words.map((title, index) => {
        return (
          <BoardingSlides
            key={index.toString()}
            title={title}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
