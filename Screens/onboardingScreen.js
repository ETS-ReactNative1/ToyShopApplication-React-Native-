import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {PageData} from '../Data/Onboarddata';

import BoardingSlides from '../Components/BoardingSlides';

//Array for the Data
const Words = ['Hey', 'There', "I'am", 'developer'];

export default function Onboardingscreen({navigation}) {
  //Storing the TranslateX Value in the Shared Value Bcz we need this valur for Animations

  const translateX = useSharedValue(0);

  //Scroll handler to get the Scrolling event on Horizontal axis
  const ScrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={[styles.wrapper]}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={ScrollHandler}
        showsHorizontalScrollIndicator={false}
        snapToAlignment
        pagingEnabled
        horizontal>
        {PageData.map((item, index) => {
          return (
            <BoardingSlides
              key={index.toString()}
              index={index}
              translateX={translateX}
              Page={item}
            />
          );
        })}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <Text>Thisis the Text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  footer: {
    height: 50,
    marginBottom: 10,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'red',
  },
});
